// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleOptionMarketFactory} from "../src/SiftleOptionMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployOptionMarketFactory {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run() external returns (address factoryAddress) {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        address usdcAddress = 0x3600000000000000000000000000000000000000;
        address resolverAddress = 0x2f5fc4f223875b5F453C5534C50f926b114091B7;

        vm.startBroadcast(privateKey);

        SiftleOptionMarketFactory factory = new SiftleOptionMarketFactory(
            usdcAddress,
            resolverAddress
        );

        factoryAddress = address(factory);

        vm.stopBroadcast();
    }
}
