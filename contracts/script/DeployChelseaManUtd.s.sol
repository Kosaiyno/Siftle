// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleOptionMarketFactory} from "../src/SiftleOptionMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployChelseaManUtd {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run() external returns (address marketAddress) {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        address factoryAddress = 0xA73C9a31aa2ab6C0CA85C0C105eba561Ab5d4B7b;

        vm.startBroadcast(privateKey);

        SiftleOptionMarketFactory factory = SiftleOptionMarketFactory(factoryAddress);

        string[] memory labels = new string[](3);
        labels[0] = "Chelsea";
        labels[1] = "Draw";
        labels[2] = "Manchester United";

        // Closes in 48 hours
        uint64 closesAt = uint64(block.timestamp + 172800);

        marketAddress = factory.createOptionMarket(
            closesAt,
            "m-chelsea-manutd",
            "Chelsea vs Manchester United Match Result",
            labels
        );

        vm.stopBroadcast();
    }
}
