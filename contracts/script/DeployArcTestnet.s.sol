// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarketFactory} from "../src/SiftleMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployArcTestnet {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));
    address private constant ARC_TESTNET_USDC = 0x3600000000000000000000000000000000000000;

    function run() external returns (SiftleMarketFactory factory) {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        address resolver = vm.envAddress("SIFTLE_MARKET_RESOLVER");
        vm.startBroadcast(privateKey);
        factory = new SiftleMarketFactory(ARC_TESTNET_USDC, resolver);
        vm.stopBroadcast();
    }
}
