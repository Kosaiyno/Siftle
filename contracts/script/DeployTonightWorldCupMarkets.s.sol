// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarketFactory} from "../src/SiftleMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployTonightWorldCupMarkets {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run()
        external
        returns (
            address ivoryCoastNorway,
            address haalandMbappe,
            address franceSweden
        )
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);

        ivoryCoastNorway = factory.createMarket(
            1782838800,
            "Will Ivory Coast eliminate Norway from the World Cup?",
            "wc-ivory-coast-eliminate-norway",
            "Resolves Yes if Ivory Coast advances and Norway is eliminated from the 2026 World Cup as a result of their knockout match, whether in regular time, extra time, or penalties. Resolves No if Norway advances. If the match is abandoned without an official advancing team, the market remains open until the fixture is completed or officially ruled unresolved."
        );

        haalandMbappe = factory.createMarket(
            1782838800,
            "Will Haaland outscore Mbappe in today's World Cup matches?",
            "wc-haaland-outscore-mbappe",
            "Resolves Yes if Erling Haaland is officially credited with more goals for Norway against Ivory Coast than Kylian Mbappe is officially credited with for France against Sweden in their June 30, 2026 World Cup matches. Resolves No if Mbappe scores the same number of goals or more. Own goals and penalty shootout goals do not count. If either player does not play, that player's goal total is zero."
        );

        franceSweden = factory.createMarket(
            1782849600,
            "Will France beat Sweden by 2 or more goals?",
            "wc-france-sweden-spread",
            "Resolves Yes if France defeats Sweden by a margin of 2 or more goals in their June 30, 2026 World Cup knockout match, including extra time if played. Resolves No if France wins by exactly 1 goal, Sweden advances, or the match is decided by penalties after a draw. Penalty shootout goals do not count toward the margin."
        );

        vm.stopBroadcast();
    }
}
