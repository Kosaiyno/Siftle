import { createAppKit } from "@reown/appkit";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { defineChain } from "@reown/appkit/networks";
import { BrowserProvider, Contract, JsonRpcProvider, formatUnits, parseUnits } from "ethers";
import type { Eip1193Provider } from "ethers";

export const ARC_TESTNET_CHAIN_ID = 5042002;
const ARC_TESTNET_CHAIN_ID_HEX = "0x4cef52";
export const ARC_TESTNET_USDC =
  (window as Window & { ARC_TESTNET_USDC_ADDRESS?: string }).ARC_TESTNET_USDC_ADDRESS ||
  "0x3600000000000000000000000000000000000000";
export const ARC_TESTNET_EXPLORER = "https://testnet.arcscan.app";
export const ARC_TESTNET_FAUCET = "https://faucet.circle.com/";
export const ARC_TESTNET_RPC_URL = "https://rpc.testnet.arc.network";

const BALANCE_OF_SELECTOR = "0x70a08231";
const projectId = (window as Window & { REOWN_PROJECT_ID?: string }).REOWN_PROJECT_ID || "";
const publicProvider = new JsonRpcProvider(ARC_TESTNET_RPC_URL, ARC_TESTNET_CHAIN_ID);

const ERC20_ABI = [
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function balanceOf(address owner) view returns (uint256)"
];

const SIFTLE_MARKET_ABI = [
  "function buy(bool yes, uint256 amount) external",
  "function sell(bool yes, uint256 amount) external",
  "function yesShares(address owner) view returns (uint256)",
  "function noShares(address owner) view returns (uint256)",
  "function totalYesShares() view returns (uint256)",
  "function totalNoShares() view returns (uint256)",
  "function impliedYesProbability() view returns (uint256)",
  "function outcome() view returns (uint8)"
];

export interface ArcMarketSnapshot {
  yesPriceCents: number;
  noPriceCents: number;
  volumeUsdc: number;
  yesSharesUsdc: number;
  noSharesUsdc: number;
  outcome: 0 | 1 | 2 | 3;
}

export interface ArcMarketPosition {
  yesSharesUsdc: number;
  noSharesUsdc: number;
}

interface InjectedWalletProvider extends Eip1193Provider {
  isRabby?: boolean;
  isMetaMask?: boolean;
  selectedAddress?: string;
  on?: (event: string, callback: (...args: unknown[]) => void) => void;
  removeListener?: (event: string, callback: (...args: unknown[]) => void) => void;
}

export const arcTestnet = defineChain({
  id: ARC_TESTNET_CHAIN_ID,
  caipNetworkId: `eip155:${ARC_TESTNET_CHAIN_ID}`,
  chainNamespace: "eip155",
  name: "Arc Testnet",
  nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
  rpcUrls: {
    default: { http: [ARC_TESTNET_RPC_URL] }
  },
  blockExplorers: {
    default: { name: "Arcscan", url: ARC_TESTNET_EXPLORER }
  },
  testnet: true
});

const appKit = projectId
  ? createAppKit({
      adapters: [new EthersAdapter()],
      networks: [arcTestnet],
      defaultNetwork: arcTestnet,
      projectId,
      metadata: {
        name: "Siftle",
        description: "News threads powering transparent prediction markets",
        url: window.location.origin,
        icons: [`${window.location.origin}/assets/Siftle_logo-removebg-preview.png`]
      },
      features: {
        analytics: false,
        email: false,
        socials: false
      },
      enableInjected: true,
      enableEIP6963: true,
      enableCoinbase: true,
      enableBaseAccount: true,
      enableReconnect: false
    })
  : null;

const requestRpc = async <T>(method: string, params: unknown[]): Promise<T> => {
  const response = await fetch(ARC_TESTNET_RPC_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: Date.now(), method, params })
  });
  if (!response.ok) throw new Error(`Arc RPC request failed with ${response.status}`);

  const payload = (await response.json()) as { result?: T; error?: { message?: string } };
  if (payload.error) throw new Error(payload.error.message || "Arc RPC request failed");
  if (payload.result === undefined) throw new Error("Arc RPC returned no result");
  return payload.result;
};

export const isWalletConnectConfigured = (): boolean => Boolean(appKit);

let walletConnectPromise: Promise<string> | null = null;
let injectedWalletProvider: InjectedWalletProvider | null = null;
let injectedWalletAddress: string | null = null;

const getInjectedWalletProvider = (): InjectedWalletProvider | null => {
  const ethereum = window.ethereum as (InjectedWalletProvider & { providers?: InjectedWalletProvider[] }) | undefined;
  if (!ethereum) return null;
  const providers = ethereum.providers;
  return providers?.find((provider) => provider.isRabby) || providers?.find((provider) => provider.isMetaMask) || ethereum;
};

const getInjectedAccounts = async (provider: InjectedWalletProvider): Promise<string[]> => {
  const accounts = await provider.request({ method: "eth_accounts" });
  return Array.isArray(accounts) ? accounts.map(String) : [];
};

const switchInjectedWalletToArc = async (provider: InjectedWalletProvider): Promise<void> => {
  try {
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: ARC_TESTNET_CHAIN_ID_HEX }]
    });
  } catch (error) {
    const code = (error as { code?: number | string }).code;
    if (code !== 4902 && code !== "4902") throw error;
    await provider.request({
      method: "wallet_addEthereumChain",
      params: [{
        chainId: ARC_TESTNET_CHAIN_ID_HEX,
        chainName: "Arc Testnet",
        nativeCurrency: { name: "USDC", symbol: "USDC", decimals: 18 },
        rpcUrls: [ARC_TESTNET_RPC_URL],
        blockExplorerUrls: [ARC_TESTNET_EXPLORER]
      }]
    });
  }
};

const connectInjectedArcWallet = async (): Promise<string | null> => {
  const provider = getInjectedWalletProvider();
  if (!provider) return null;
  if (walletConnectPromise) return walletConnectPromise;

  walletConnectPromise = (async () => {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    const account = Array.isArray(accounts) ? String(accounts[0] || "") : "";
    if (!account) throw new Error("Wallet connection declined");
    await switchInjectedWalletToArc(provider);
    injectedWalletProvider = provider;
    injectedWalletAddress = account;
    return account;
  })().finally(() => {
    window.setTimeout(() => {
      walletConnectPromise = null;
    }, 1500);
  });

  return walletConnectPromise;
};

const connectAppKitArcWallet = async (): Promise<string> => {
  if (!appKit) throw new Error("Install Rabby, MetaMask, or add REOWN_PROJECT_ID to enable WalletConnect");
  const connectedAddress = appKit.getAddress("eip155");
  if (connectedAddress) return connectedAddress;

  if (walletConnectPromise) return walletConnectPromise;

  walletConnectPromise = (async () => {
    await appKit.close().catch(() => undefined);
    await appKit.open({ view: "Connect", namespace: "eip155" });
    return appKit.getAddress("eip155") || waitForWalletAddress();
  })().finally(() => {
    window.setTimeout(() => {
      walletConnectPromise = null;
    }, 1200);
  });

  return walletConnectPromise;
};

const waitForWalletAddress = async (): Promise<string> => {
  const immediateAddress = appKit?.getAddress("eip155");
  if (immediateAddress) return immediateAddress;

  return new Promise((resolve, reject) => {
    if (!appKit) {
      reject(new Error("Add REOWN_PROJECT_ID to enable WalletConnect"));
      return;
    }

    const timeout = window.setTimeout(() => {
      unsubscribe();
      reject(new Error("Wallet connection timed out. Open your wallet and approve the request."));
    }, 60000);

    const unsubscribe = appKit.subscribeAccount((account) => {
      if (!account.address) return;
      window.clearTimeout(timeout);
      unsubscribe();
      resolve(account.address);
    }, "eip155");
  });
};

export const connectArcWallet = async (): Promise<string> => {
  if (appKit) return connectAppKitArcWallet();

  try {
    const injectedAccount = await connectInjectedArcWallet();
    if (injectedAccount) return injectedAccount;
  } catch (error) {
    console.warn("Injected wallet connection failed", error);
    walletConnectPromise = null;
  }

  throw new Error("Install Rabby, MetaMask, or add REOWN_PROJECT_ID to enable WalletConnect");
};

export const getConnectedArcWallet = (): string | null =>
  appKit?.getAddress("eip155") || injectedWalletAddress || injectedWalletProvider?.selectedAddress || null;

export const subscribeArcWallet = (callback: (address: string | null) => void): (() => void) => {
  if (appKit) return appKit.subscribeAccount((account) => callback(account.address || null), "eip155");

  const provider = getInjectedWalletProvider();
  if (provider?.on) {
    const accountsChanged = (accounts: unknown): void => {
      const nextAccounts = Array.isArray(accounts) ? accounts.map(String) : [];
      injectedWalletAddress = nextAccounts[0] || null;
      injectedWalletProvider = injectedWalletAddress ? provider : null;
      callback(nextAccounts[0] || null);
    };
    provider.on("accountsChanged", accountsChanged);
    void getInjectedAccounts(provider).then((accounts) => {
      injectedWalletAddress = accounts[0] || null;
      if (injectedWalletAddress) injectedWalletProvider = provider;
      callback(injectedWalletAddress);
    }).catch(() => undefined);
    return () => provider.removeListener?.("accountsChanged", accountsChanged);
  }
  return () => undefined;
};

export const readArcUsdcBalance = async (account: string): Promise<string> => {
  const encodedAccount = account.toLowerCase().replace(/^0x/, "").padStart(64, "0");
  const result = await requestRpc<string>("eth_call", [
    { to: ARC_TESTNET_USDC, data: `${BALANCE_OF_SELECTOR}${encodedAccount}` },
    "latest"
  ]);
  return (Number(BigInt(result || "0x0")) / 1_000_000).toLocaleString(undefined, { maximumFractionDigits: 2 });
};

const getSigner = async () => {
  const appKitAccount = appKit?.getAddress("eip155");
  if (appKitAccount && appKit) {
    await appKit.switchNetwork(arcTestnet, { throwOnFailure: true });
    const walletProvider = appKit.getWalletProvider();
    if (!walletProvider) throw new Error("Wallet provider unavailable");
    const provider = new BrowserProvider(walletProvider as Eip1193Provider, ARC_TESTNET_CHAIN_ID);
    return { signer: await provider.getSigner(), account: appKitAccount };
  }

  if (injectedWalletProvider) {
    const accounts = await getInjectedAccounts(injectedWalletProvider);
    const account = accounts[0] || (await connectArcWallet());
    injectedWalletAddress = account;
    await switchInjectedWalletToArc(injectedWalletProvider);
    const provider = new BrowserProvider(injectedWalletProvider, ARC_TESTNET_CHAIN_ID);
    return { signer: await provider.getSigner(), account };
  }

  const account = appKit?.getAddress("eip155") || (await connectArcWallet());
  if (!account) throw new Error("Connect your wallet first");
  if (!appKit) throw new Error("Install Rabby, MetaMask, or add REOWN_PROJECT_ID to enable WalletConnect");
  await appKit.switchNetwork(arcTestnet, { throwOnFailure: true });
  const walletProvider = appKit.getWalletProvider();
  if (!walletProvider) throw new Error("Wallet provider unavailable");
  const provider = new BrowserProvider(walletProvider as Eip1193Provider, ARC_TESTNET_CHAIN_ID);
  return { signer: await provider.getSigner(), account };
};

export const readArcMarketSnapshot = async (marketAddress: string): Promise<ArcMarketSnapshot> => {
  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [totalYes, totalNo, probability, outcome] = await Promise.all([
    market.totalYesShares() as Promise<bigint>,
    market.totalNoShares() as Promise<bigint>,
    market.impliedYesProbability() as Promise<bigint>,
    market.outcome() as Promise<bigint>
  ]);
  const yesPriceCents = Math.round(Number(probability) / 100);
  const yesSharesUsdc = Number(formatUnits(totalYes, 6));
  const noSharesUsdc = Number(formatUnits(totalNo, 6));
  return {
    yesPriceCents,
    noPriceCents: 100 - yesPriceCents,
    volumeUsdc: yesSharesUsdc + noSharesUsdc,
    yesSharesUsdc,
    noSharesUsdc,
    outcome: Number(outcome) as 0 | 1 | 2 | 3
  };
};

export const readArcMarketPosition = async (marketAddress: string, account: string): Promise<ArcMarketPosition> => {
  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [yesShares, noShares] = await Promise.all([
    market.yesShares(account) as Promise<bigint>,
    market.noShares(account) as Promise<bigint>
  ]);
  return {
    yesSharesUsdc: Number(formatUnits(yesShares, 6)),
    noSharesUsdc: Number(formatUnits(noShares, 6))
  };
};

export const executeArcMarketOrder = async (
  marketAddress: string,
  mode: "buy" | "sell",
  side: "yes" | "no",
  amountUsdc: number
): Promise<string> => {
  if (!marketAddress) throw new Error("This market needs an Arc contract address before trading");
  if (!Number.isFinite(amountUsdc) || amountUsdc <= 0) throw new Error("Enter an amount first");

  const { signer, account } = await getSigner();
  const amount = parseUnits(amountUsdc.toFixed(6), 6);
  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, signer);

  if (mode === "buy") {
    const usdc = new Contract(ARC_TESTNET_USDC, ERC20_ABI, signer);
    const allowance = (await usdc.allowance(account, marketAddress)) as bigint;
    if (allowance < amount) {
      const approval = await usdc.approve(marketAddress, amount);
      await approval.wait();
    }
    const tx = await market.buy(side === "yes", amount);
    await tx.wait();
    return tx.hash as string;
  }

  const tx = await market.sell(side === "yes", amount);
  await tx.wait();
  return tx.hash as string;
};

export const shortenAddress = (account: string): string => `${account.slice(0, 6)}...${account.slice(-4)}`;
