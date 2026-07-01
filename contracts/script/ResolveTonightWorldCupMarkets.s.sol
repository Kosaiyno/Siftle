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

        ISiftleMarket ivoryCoastNorway = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_IVORY_COAST_NORWAY_ADDRESS"));
        ISiftleMarket haalandMbappe = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_HAALAND_MBAPPE_ADDRESS"));
        ISiftleMarket franceSweden = ISiftleMarket(vm.envAddress("SIFTLE_MARKET_FRANCE_SWEDEN_ADDRESS"));

        vm.startBroadcast(privateKey);

        ivoryCoastNorway.resolve(2);
        haalandMbappe.resolve(2);
        franceSweden.resolve(1);

        vm.stopBroadcast();
    }
}
