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

        ISiftleMarket viniciusJapan = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_VINICIUS_JAPAN_ADDRESS"));
        ISiftleMarket paraguayGermany = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_PARAGUAY_GERMANY_ADDRESS"));
        ISiftleMarket moroccoNetherlands = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_MOROCCO_NETHERLANDS_ADDRESS"));

        vm.startBroadcast(privateKey);

        viniciusJapan.resolve(2);
        paraguayGermany.resolve(1);
        moroccoNetherlands.resolve(1);

        vm.stopBroadcast();
    }
}
