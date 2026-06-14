import { JsonRpcProvider, Contract, Wallet } from 'ethers';

const RPC_URL = "https://rpc.testnet.arc.network";
const USDC_ADDRESS = "0x3600000000000000000000000000000000000000";

const main = async () => {
  const provider = new JsonRpcProvider(RPC_URL);
  
  // Let's create a random wallet to test minting
  const tempWallet = Wallet.createRandom(provider);
  console.log(`Temp wallet address: ${tempWallet.address}`);
  
  // Let's try calling typical faucet/mint methods
  const abi = [
    "function mint(address to, uint256 amount) public",
    "function faucet(uint256 amount) public",
    "function allocateTo(address to, uint256 amount) public",
    "function configureMinter(address minter, uint256 allowedAmount) public"
  ];
  
  const contract = new Contract(USDC_ADDRESS, abi, tempWallet);
  
  try {
    console.log("Attempting configureMinter/mint...");
    // Some testnet USDC allow configureMinter or mint directly
    // Let's try direct mint first
    const tx = await contract.mint(tempWallet.address, 1000n * 10n**6n);
    console.log("Mint success! Tx hash:", tx.hash);
  } catch (err) {
    console.log("Direct mint failed:", err.message);
  }
  
  try {
    console.log("Attempting allocateTo...");
    const contract2 = new Contract(USDC_ADDRESS, ["function allocateTo(address,uint256)"], tempWallet);
    const tx = await contract2.allocateTo(tempWallet.address, 1000n * 10n**6n);
    console.log("allocateTo success! Tx:", tx.hash);
  } catch (err) {
    console.log("allocateTo failed:", err.message);
  }
};

main();
