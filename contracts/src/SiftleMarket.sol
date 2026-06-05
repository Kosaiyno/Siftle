// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

contract SiftleMarket {
    enum Outcome {
        Unresolved,
        Yes,
        No,
        Invalid
    }

    IERC20 public immutable usdc;
    address public immutable resolver;
    uint64 public immutable closesAt;
    string public question;
    string public threadId;
    string public resolutionRules;
    Outcome public outcome;

    mapping(address => uint256) public yesShares;
    mapping(address => uint256) public noShares;
    uint256 public totalYesShares;
    uint256 public totalNoShares;

    event SharesBought(address indexed buyer, bool indexed yes, uint256 amount);
    event SharesSold(address indexed seller, bool indexed yes, uint256 amount);
    event MarketResolved(Outcome outcome);
    event Redeemed(address indexed account, uint256 payout);

    constructor(
        address usdcAddress,
        address resolverAddress,
        uint64 marketClosesAt,
        string memory marketQuestion,
        string memory connectedThreadId,
        string memory rules
    ) {
        require(usdcAddress != address(0) && resolverAddress != address(0), "zero address");
        require(marketClosesAt > block.timestamp, "invalid close");
        usdc = IERC20(usdcAddress);
        resolver = resolverAddress;
        closesAt = marketClosesAt;
        question = marketQuestion;
        threadId = connectedThreadId;
        resolutionRules = rules;
    }

    function buy(bool yes, uint256 amount) external {
        require(block.timestamp < closesAt, "market closed");
        require(outcome == Outcome.Unresolved, "resolved");
        require(amount > 0, "zero amount");
        require(usdc.transferFrom(msg.sender, address(this), amount), "transfer failed");

        if (yes) {
            yesShares[msg.sender] += amount;
            totalYesShares += amount;
        } else {
            noShares[msg.sender] += amount;
            totalNoShares += amount;
        }
        emit SharesBought(msg.sender, yes, amount);
    }

    function sell(bool yes, uint256 amount) external {
        require(block.timestamp < closesAt, "market closed");
        require(outcome == Outcome.Unresolved, "resolved");
        require(amount > 0, "zero amount");

        if (yes) {
            require(yesShares[msg.sender] >= amount, "not enough yes");
            yesShares[msg.sender] -= amount;
            totalYesShares -= amount;
        } else {
            require(noShares[msg.sender] >= amount, "not enough no");
            noShares[msg.sender] -= amount;
            totalNoShares -= amount;
        }

        require(usdc.transfer(msg.sender, amount), "transfer failed");
        emit SharesSold(msg.sender, yes, amount);
    }

    function resolve(Outcome result) external {
        require(msg.sender == resolver, "not resolver");
        require(block.timestamp >= closesAt, "market open");
        require(outcome == Outcome.Unresolved, "already resolved");
        require(result != Outcome.Unresolved, "invalid result");
        outcome = result;
        emit MarketResolved(result);
    }

    function redeem() external {
        require(outcome != Outcome.Unresolved, "unresolved");
        uint256 payout;

        if (outcome == Outcome.Invalid) {
            payout = yesShares[msg.sender] + noShares[msg.sender];
        } else if (outcome == Outcome.Yes) {
            payout = _winnerPayout(yesShares[msg.sender], totalYesShares);
        } else {
            payout = _winnerPayout(noShares[msg.sender], totalNoShares);
        }

        yesShares[msg.sender] = 0;
        noShares[msg.sender] = 0;
        require(payout > 0, "nothing to redeem");
        require(usdc.transfer(msg.sender, payout), "transfer failed");
        emit Redeemed(msg.sender, payout);
    }

    function impliedYesProbability() external view returns (uint256) {
        uint256 total = totalYesShares + totalNoShares;
        return total == 0 ? 50_00 : (totalYesShares * 10_000) / total;
    }

    function _winnerPayout(uint256 shares, uint256 winningShares) internal view returns (uint256) {
        if (shares == 0 || winningShares == 0) return 0;
        return (shares * (totalYesShares + totalNoShares)) / winningShares;
    }
}
