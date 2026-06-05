# Siftle Markets on Arc Testnet

Siftle's market contracts use Arc Testnet USDC for collateral and settlement.

Official Arc Testnet values:

- RPC: `https://rpc.testnet.arc.network`
- Chain ID: `5042002`
- Explorer: `https://testnet.arcscan.app`
- USDC ERC-20: `0x3600000000000000000000000000000000000000`
- Faucet: `https://faucet.circle.com/`

## Current Contract Milestone

The current contracts establish the settlement layer:

- Factory-controlled market creation
- Markets tied to a Siftle thread ID and explicit resolution rules
- Arc Testnet USDC collateral
- Yes/No positions
- Human resolver
- Invalid-market refunds
- Winning-position redemption

This first milestone is intentionally not presented as a Polymarket-style order book. A production-quality order book requires signed orders, matching, partial fills, cancellation, indexer state, and audited settlement. That is the next contract milestone.

## Build

```bash
forge build
```

## Deploy

Fund the deployer and resolver wallets with Arc Testnet USDC from the Circle Faucet, then set:

```bash
ARC_TESTNET_RPC_URL=https://rpc.testnet.arc.network
ARC_DEPLOYER_PRIVATE_KEY=...
SIFTLE_MARKET_RESOLVER=0x...
```

Deploy:

```bash
forge script contracts/script/DeployArcTestnet.s.sol:DeployArcTestnet \
  --rpc-url arc_testnet \
  --broadcast
```

Never commit deployment private keys.
