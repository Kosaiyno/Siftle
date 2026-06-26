// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarketFactory} from "../src/SiftleMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployActiveMarkets {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run()
        external
        returns (
            address transferDavies,
            address transferTonali,
            address transferGuimaraes,
            address wcMbappeHaaland,
            address wcEnglandPanama,
            address wcScotlandQual,
            address mangaOnePiece,
            address wcMessiRonaldo
        )
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);

        transferDavies = factory.createMarket(
            1788220800,
            "Will Real Madrid officially sign Alphonso Davies in the Summer Transfer Window?",
            "transfer-davies-realmadrid",
            "Resolves Yes if Real Madrid officially announces the transfer/signing of Alphonso Davies."
        );

        transferTonali = factory.createMarket(
            1788220800,
            "Will Sandro Tonali sign with Tottenham Hotspur in the Summer Transfer Window?",
            "transfer-tonali-spurs",
            "Resolves Yes if Tottenham Hotspur officially announces the transfer/signing of Sandro Tonali by the transfer deadline."
        );

        transferGuimaraes = factory.createMarket(
            1788220800,
            "Will Bruno Guimaraes officially sign with Arsenal by September 1, 2026?",
            "transfer-guimaraes-arsenal",
            "Resolves Yes if Arsenal officially announces the transfer/signing of Bruno Guimaraes by the transfer deadline."
        );

        wcMbappeHaaland = factory.createMarket(
            1782777600,
            "Will Kylian Mbappe score more goals than Erling Haaland in the France vs Norway World Cup match today?",
            "wc-mbappe-haaland-goals",
            "Resolves Yes if Kylian Mbappe scores more goals than Erling Haaland in the official match on Friday, June 26, 2026. Otherwise resolves No."
        );

        wcEnglandPanama = factory.createMarket(
            1782777600,
            "Will England defeat Panama by a margin of 2 or more goals in their World Cup match on Saturday?",
            "wc-england-panama-spread",
            "Resolves Yes if England wins the match on June 27, 2026 by a goal difference of 2 or more (e.g. 2-0, 3-1, 3-0, etc.). Otherwise resolves No."
        );

        wcScotlandQual = factory.createMarket(
            1782777600,
            "Will Scotland qualify for the World Cup Round of 32?",
            "wc-scotland-qualification",
            "Resolves Yes if Scotland officially qualifies for the Round of 32 (knockout stage) of the 2026 World Cup. Otherwise resolves No."
        );

        mangaOnePiece = factory.createMarket(
            1788220800,
            "Will Manga Chapter 1200 reveal the identity of the final Ancient Weapon?",
            "manga-onepiece-1200",
            "Resolves Yes if official English translated Chapter 1200 confirms the identity."
        );

        wcMessiRonaldo = factory.createMarket(
            1783036800,
            "Will both Lionel Messi and Cristiano Ronaldo qualify for the World Cup Round of 16 next week?",
            "wc-messi-ronaldo-16",
            "Resolves to YES if both Argentina and Portugal win their Round of 32 matches next week to reach the Round of 16. Resolves to NO if either Argentina, Portugal, or both are eliminated in the Round of 32."
        );

        vm.stopBroadcast();
    }
}
