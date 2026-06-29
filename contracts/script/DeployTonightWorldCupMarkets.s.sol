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
            address viniciusJapan,
            address paraguayGermany,
            address moroccoNetherlands
        )
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);

        viniciusJapan = factory.createMarket(
            1782788400,
            "Will Vinicius Junior score against Japan?",
            "wc-vinicius-score-japan",
            "Resolves Yes if Vinicius Junior is officially credited with at least one goal for Brazil against Japan in the 2026 World Cup match. Own goals do not count. If he does not score, does not play, or the match is abandoned without an official result, resolves No unless the match is rescheduled as part of the same fixture window."
        );

        paraguayGermany = factory.createMarket(
            1782788400,
            "Will Paraguay score a goal against Germany?",
            "wc-paraguay-score-germany",
            "Resolves Yes if Paraguay is officially credited with at least one goal against Germany in the 2026 World Cup match, including regular time and extra time if played. Penalty shootout goals do not count. If Paraguay scores zero official match goals, resolves No."
        );

        moroccoNetherlands = factory.createMarket(
            1782788400,
            "Will Morocco eliminate the Netherlands from the World Cup?",
            "wc-morocco-eliminate-netherlands",
            "Resolves Yes if Morocco advances and the Netherlands is eliminated from the 2026 World Cup as a result of their knockout match, whether in regular time, extra time, or penalties. Resolves No if the Netherlands advances."
        );

        vm.stopBroadcast();
    }
}
