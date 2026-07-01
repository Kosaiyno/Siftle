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
            address englandBothHalves,
            address deBruyneGoalAssist,
            address usaEarlyGoal
        )
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);

        englandBothHalves = factory.createMarket(
            1782920400,
            "Will England score in both halves against DR Congo?",
            "wc-england-score-both-halves-drc",
            "Resolves Yes if England are officially credited with at least one goal in the first half and at least one goal in the second half against DR Congo in their July 1, 2026 World Cup knockout match. Extra-time goals and penalty shootout goals do not count. Own goals count only if the official match record credits the goal to England's score in that half. Otherwise resolves No."
        );

        deBruyneGoalAssist = factory.createMarket(
            1782934800,
            "Will Kevin De Bruyne score or assist against Senegal?",
            "wc-de-bruyne-score-assist-senegal",
            "Resolves Yes if Kevin De Bruyne is officially credited with at least one goal or at least one assist for Belgium against Senegal in their July 1, 2026 World Cup knockout match, including regular time and extra time. Penalty shootout goals do not count. If he does not play or is not officially credited with a goal or assist, resolves No."
        );

        usaEarlyGoal = factory.createMarket(
            1782949200,
            "Will the United States score before the 20th minute against Bosnia?",
            "wc-usa-score-before-20-bosnia",
            "Resolves Yes if the United States are officially credited with a goal before the match clock reaches 20:00 against Bosnia and Herzegovina in their July 1, 2026 World Cup knockout match. Own goals count only if the official match record adds the goal to the United States score before 20:00. Extra-time and penalty shootout goals do not count. Otherwise resolves No."
        );

        vm.stopBroadcast();
    }
}
