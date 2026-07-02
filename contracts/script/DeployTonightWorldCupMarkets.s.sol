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
            address spainSpread,
            address ronaldoGoalAssist,
            address portugalCroatiaExtraTime
        )
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);

        spainSpread = factory.createMarket(
            1783017600,
            "Will Spain beat Austria by a margin of 2 or more goals?",
            "wc-spain-austria-spread",
            "Resolves Yes if Spain defeat Austria by a margin of 2 or more goals in their July 2, 2026 World Cup knockout match, including extra time if played. Resolves No if Spain win by exactly 1 goal, Austria advance, or the match is decided by penalties after a draw. Penalty shootout goals do not count toward the margin."
        );

        ronaldoGoalAssist = factory.createMarket(
            1783032000,
            "Will Cristiano Ronaldo score or assist against Croatia?",
            "wc-ronaldo-score-assist-croatia",
            "Resolves Yes if Cristiano Ronaldo is officially credited with at least one goal or assist for Portugal against Croatia in their July 2, 2026 World Cup knockout match, including regular time and extra time. Penalty shootout goals do not count. Resolves No if he does not play or is not officially credited with a goal or assist."
        );

        portugalCroatiaExtraTime = factory.createMarket(
            1783032000,
            "Will Portugal vs Croatia go to extra time?",
            "wc-portugal-croatia-extra-time",
            "Resolves Yes if Portugal vs Croatia is level after 90 minutes plus stoppage time and goes to extra time in their July 2, 2026 World Cup knockout match. Resolves No if either team wins in regulation. Penalty shootouts are only relevant if the match has already gone to extra time."
        );

        vm.stopBroadcast();
    }
}
