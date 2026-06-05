import { createAppKit } from "@reown/appkit";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { defineChain } from "@reown/appkit/networks";
import { BrowserProvider, Contract, JsonRpcProvider, formatUnits, parseUnits } from "ethers";
import type { Eip1193Provider } from "ethers";

export const ARC_TESTNET_CHAIN_ID = 5042002;
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
  "function impliedYesProbability() view returns (uint256)"
];

export interface ArcMarketSnapshot {
  yesPriceCents: number;
  noPriceCents: number;
  volumeUsdc: number;
  yesSharesUsdc: number;
  noSharesUsdc: number;
}

export interface ArcMarketPosition {
  yesSharesUsdc: number;
  noSharesUsdc: number;
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
      }
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

export const connectArcWallet = async (): Promise<string> => {
  if (!appKit) throw new Error("Add REOWN_PROJECT_ID to enable WalletConnect");
  await appKit.open();
  return appKit.getAddress("eip155") || "";
};

export const getConnectedArcWallet = (): string | null => appKit?.getAddress("eip155") || null;

export const subscribeArcWallet = (callback: (address: string | null) => void): (() => void) => {
  if (!appKit) return () => undefined;
  return appKit.subscribeAccount((account) => callback(account.address || null), "eip155");
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
  if (!appKit) throw new Error("Add REOWN_PROJECT_ID to enable WalletConnect");
  const account = appKit.getAddress("eip155") || (await connectArcWallet());
  if (!account) throw new Error("Connect your wallet first");
  await appKit.switchNetwork(arcTestnet, { throwOnFailure: true });
  const walletProvider = appKit.getWalletProvider();
  if (!walletProvider) throw new Error("Wallet provider unavailable");
  const provider = new BrowserProvider(walletProvider as Eip1193Provider, ARC_TESTNET_CHAIN_ID);
  return { signer: await provider.getSigner(), account };
};

export const readArcMarketSnapshot = async (marketAddress: string): Promise<ArcMarketSnapshot> => {
  const market = new Contract(marketAddress, SIFTLE_MARKET_ABI, publicProvider);
  const [totalYes, totalNo, probability] = await Promise.all([
    market.totalYesShares() as Promise<bigint>,
    market.totalNoShares() as Promise<bigint>,
    market.impliedYesProbability() as Promise<bigint>
  ]);
  const yesPriceCents = Math.round(Number(probability) / 100);
  const yesSharesUsdc = Number(formatUnits(totalYes, 6));
  const noSharesUsdc = Number(formatUnits(totalNo, 6));
  return {
    yesPriceCents,
    noPriceCents: 100 - yesPriceCents,
    volumeUsdc: yesSharesUsdc + noSharesUsdc,
    yesSharesUsdc,
    noSharesUsdc
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
