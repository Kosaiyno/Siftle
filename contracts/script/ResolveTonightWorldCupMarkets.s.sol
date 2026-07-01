// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

interface ISiftleMarket {
    function resolve(uint8 result) external;
}

contract ResolveTonightWorldCupMarkets {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run() external {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");

        ISiftleMarket englandBothHalves = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_ENGLAND_DRC_BOTH_HALVES_ADDRESS"));
        ISiftleMarket deBruyneGoalAssist = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_DE_BRUYNE_SENEGAL_ADDRESS"));
        ISiftleMarket usaEarlyGoal = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_USA_BOSNIA_EARLY_GOAL_ADDRESS"));
        uint8 englandResult = uint8(vm.envUint("SIFTLE_MARKET_ENGLAND_DRC_BOTH_HALVES_RESULT"));
        uint8 deBruyneResult = uint8(vm.envUint("SIFTLE_MARKET_DE_BRUYNE_SENEGAL_RESULT"));
        uint8 usaResult = uint8(vm.envUint("SIFTLE_MARKET_USA_BOSNIA_EARLY_GOAL_RESULT"));

        vm.startBroadcast(privateKey);

        englandBothHalves.resolve(englandResult);
        deBruyneGoalAssist.resolve(deBruyneResult);
        usaEarlyGoal.resolve(usaResult);

        vm.stopBroadcast();
    }
}
