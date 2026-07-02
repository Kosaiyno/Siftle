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

        ISiftleMarket spainSpread = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_SPAIN_AUSTRIA_SPREAD_ADDRESS"));
        ISiftleMarket ronaldoGoalAssist = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_RONALDO_CROATIA_ADDRESS"));
        ISiftleMarket portugalCroatiaExtraTime = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_PORTUGAL_CROATIA_EXTRA_TIME_ADDRESS"));
        uint8 spainResult = uint8(vm.envUint("SIFTLE_MARKET_SPAIN_AUSTRIA_SPREAD_RESULT"));
        uint8 ronaldoResult = uint8(vm.envUint("SIFTLE_MARKET_RONALDO_CROATIA_RESULT"));
        uint8 extraTimeResult = uint8(vm.envUint("SIFTLE_MARKET_PORTUGAL_CROATIA_EXTRA_TIME_RESULT"));

        vm.startBroadcast(privateKey);

        spainSpread.resolve(spainResult);
        ronaldoGoalAssist.resolve(ronaldoResult);
        portugalCroatiaExtraTime.resolve(extraTimeResult);

        vm.stopBroadcast();
    }
}
