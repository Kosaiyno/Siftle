// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarketFactory} from "../src/SiftleMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeploySiftleMarkets {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));
    address private constant ARC_TESTNET_USDC = 0x3600000000000000000000000000000000000000;

    function run()
        external
        returns (SiftleMarketFactory factory, address newGlenn, address strategySale, address nbaFinals)
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        address resolver = vm.envAddress("SIFTLE_MARKET_RESOLVER");

        vm.startBroadcast(privateKey);
        factory = new SiftleMarketFactory(ARC_TESTNET_USDC, resolver);

        newGlenn = factory.createMarket(
            1798675200,
            "Will Blue Origin launch New Glenn again before December 31, 2026?",
            "new-glenn-2026",
            "Resolves Yes when a New Glenn vehicle lifts off on an orbital launch attempt before the deadline."
        );

        strategySale = factory.createMarket(
            1782864000,
            "Will Strategy report another Bitcoin sale before July 1, 2026?",
            "strategy-bitcoin-sale",
            "Resolves Yes if Strategy publicly reports selling Bitcoin before the deadline."
        );

        nbaFinals = factory.createMarket(
            1782777600,
            "Will the San Antonio Spurs win the 2026 NBA Finals?",
            "nba-finals",
            "Resolves Yes if the San Antonio Spurs are declared 2026 NBA champions."
        );
        vm.stopBroadcast();
    }
}
