// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarketFactory} from "../src/SiftleMarketFactory.sol";

interface Vm {
    function envUint(string calldata name) external returns (uint256);
    function envAddress(string calldata name) external returns (address);
    function startBroadcast(uint256 privateKey) external;
    function stopBroadcast() external;
}

contract DeployWorldMarkets {
    Vm private constant vm = Vm(address(uint160(uint256(keccak256("hevm cheat code")))));

    function run()
        external
        returns (address englandWorldCupOpener, address neymarWorldCupOpener, address iranWorldCupVisas)
    {
        uint256 privateKey = vm.envUint("ARC_DEPLOYER_PRIVATE_KEY");
        SiftleMarketFactory factory = SiftleMarketFactory(vm.envAddress("SIFTLE_MARKET_FACTORY_ADDRESS"));

        vm.startBroadcast(privateKey);
        englandWorldCupOpener = factory.createMarket(
            1781222400,
            "Will England win their opening 2026 World Cup match?",
            "england-world-cup-opener",
            "Resolves Yes if England's first 2026 FIFA World Cup match ends with England winning in regulation or after extra time if extra time is officially part of that match result. A draw, loss, cancellation without a played opener, or unresolved result resolves No."
        );

        neymarWorldCupOpener = factory.createMarket(
            1781222400,
            "Will Neymar play in Brazil's opening 2026 World Cup match?",
            "neymar-world-cup-opener",
            "Resolves Yes if Neymar officially appears on the pitch for Brazil in its opening 2026 FIFA World Cup match. Being named in the squad or on the bench without playing resolves No."
        );

        iranWorldCupVisas = factory.createMarket(
            1781222400,
            "Will Iran's World Cup visa dispute be resolved before their opening match?",
            "iran-world-cup-visas",
            "Resolves Yes if credible reporting confirms Iran's players and key team officials have the required tournament travel visas before kickoff of Iran's opening match. Any reported unresolved denial or travel block for key team officials at kickoff resolves No."
        );
        vm.stopBroadcast();
    }
}
