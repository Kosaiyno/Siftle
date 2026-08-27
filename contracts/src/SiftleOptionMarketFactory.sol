// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./SiftleOptionMarket.sol";

/**
 * @title SiftleOptionMarketFactory
 * @notice On-Chain Factory for deploying standalone SiftleOptionMarket contracts on Arc L1.
 */
contract SiftleOptionMarketFactory {
    address public immutable usdc;
    address public immutable resolver;

    address[] public deployedOptionMarkets;
    mapping(string => address) public getOptionMarketById;

    event OptionMarketCreated(
        string indexed marketId,
        address indexed marketAddress,
        string[] optionLabels,
        uint64 closesAt
    );

    constructor(address usdcAddress, address resolverAddress) {
        require(usdcAddress != address(0) && resolverAddress != address(0), "zero address");
        usdc = usdcAddress;
        resolver = resolverAddress;
    }

    function createOptionMarket(
        uint64 closesAt,
        string memory id,
        string memory question,
        string[] memory labels
    ) external returns (address marketAddress) {
        require(msg.sender == resolver, "not resolver");
        require(getOptionMarketById[id] == address(0), "market id exists");

        SiftleOptionMarket newMarket = new SiftleOptionMarket(
            usdc,
            resolver,
            closesAt,
            id,
            question,
            labels
        );

        marketAddress = address(newMarket);
        deployedOptionMarkets.push(marketAddress);
        getOptionMarketById[id] = marketAddress;

        emit OptionMarketCreated(id, marketAddress, labels, closesAt);
    }

    function getDeployedOptionMarketsCount() external view returns (uint256) {
        return deployedOptionMarkets.length;
    }

    function getDeployedOptionMarkets() external view returns (address[] memory) {
        return deployedOptionMarkets;
    }
}
