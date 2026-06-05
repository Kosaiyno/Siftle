# Siftle x Arc Grant Brief

## One Line

Siftle turns verified, multi-day news threads into transparent evidence for USDC-settled prediction markets on Arc.

## Why Arc

- Arc explicitly supports prediction markets as a target financial use case.
- USDC-native gas keeps user costs understandable and avoids a separate gas token.
- Deterministic sub-second finality supports responsive market settlement.
- EVM compatibility lets Siftle use Solidity, Foundry, Viem, and standard wallets.

## What Is Already Working

- Multi-source news ingestion across Crypto, Sports, Anime, and Tech
- Shelby-backed archive and multi-day thread history
- 0G-reviewed story grouping and thread topics
- Prediction-market discovery and evidence-thread UX
- Arc Testnet wallet connection, network switching, and USDC balance display
- Foundry contracts for market creation, testnet USDC collateral, resolution, refunds, and redemption

## Grant Milestones

1. Deploy the Siftle market factory and settlement contracts to Arc Testnet.
2. Replace the first pooled settlement milestone with a signed-order book supporting bids, asks, partial fills, cancellation, and Sell execution.
3. Build an event indexer for markets, trades, user positions, volume, and redemption.
4. Connect real Siftle threads to onchain market IDs and immutable resolution rules.
5. Add resolver multisig, dispute window, invalid-market refunds, and public resolution evidence.
6. Run an external smart-contract review and publish testnet metrics.

## Metrics To Report

- Arc Testnet wallets connected
- Markets created and resolved
- USDC test volume
- Unique traders and repeat traders
- Evidence-thread reads before trades
- Resolution disputes and invalid markets
- Median transaction finality and USDC gas cost

## Current Funding Paths

- Arc Builders Fund: announced as coming soon; sign up for updates.
- Circle Developer Grants and Arc ecosystem support.
- Arc House builder showcases and the Architects community program.

## Public Links To Maintain

- Working Arc Testnet application
- Open-source repository
- Deployed contract addresses and Arcscan links
- Architecture and security notes
- Product demo showing thread-to-market flow
- Weekly build updates and testnet usage metrics
