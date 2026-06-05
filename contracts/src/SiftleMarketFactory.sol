// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {SiftleMarket} from "./SiftleMarket.sol";

contract SiftleMarketFactory {
    address public immutable usdc;
    address public owner;
    address public resolver;
    address[] public markets;

    event MarketCreated(address indexed market, string question, string threadId, uint64 closesAt);
    event ResolverUpdated(address indexed resolver);

    constructor(address usdcAddress, address resolverAddress) {
        require(usdcAddress != address(0) && resolverAddress != address(0), "zero address");
        usdc = usdcAddress;
        owner = msg.sender;
        resolver = resolverAddress;
    }

    function createMarket(
        uint64 closesAt,
        string calldata question,
        string calldata threadId,
        string calldata resolutionRules
    ) external returns (address market) {
        require(msg.sender == owner, "not owner");
        market = address(new SiftleMarket(usdc, resolver, closesAt, question, threadId, resolutionRules));
        markets.push(market);
        emit MarketCreated(market, question, threadId, closesAt);
    }

    function setResolver(address nextResolver) external {
        require(msg.sender == owner, "not owner");
        require(nextResolver != address(0), "zero address");
        resolver = nextResolver;
        emit ResolverUpdated(nextResolver);
    }

    function marketCount() external view returns (uint256) {
        return markets.length;
    }
}
