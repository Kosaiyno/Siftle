// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function transferFrom(address from, address to, uint256 value) external returns (bool);
}

/**
 * @title SiftleOptionMarket
 * @notice Multi-Option Pari-Mutuel Prediction Pool Contract for Arc L1.
 * @dev Implements zero house margin, proportional payout splitting, and Polymarket zero-winner refund safety.
 */
contract SiftleOptionMarket {
    enum MarketState { Active, Resolved, Cancelled }

    IERC20 public immutable usdc;
    address public immutable resolver;
    uint64 public immutable closesAt;
    string public marketId;
    string public question;
    string[] public optionLabels;

    MarketState public state;
    int16 public winningOptionId = -1; // -1 if unresolved or cancelled

    uint256 public totalMarketPool;
    mapping(uint8 => uint256) public optionPools;
    mapping(address => mapping(uint8 => uint256)) public userOptionShares;
    mapping(address => uint256) public totalUserDeposits;
    mapping(address => bool) public claimed;

    event SharesBought(address indexed buyer, uint8 indexed optionId, uint256 amount);
    event MarketResolved(uint8 winningOptionId, uint256 totalPool, uint256 winningOptionPool);
    event MarketCancelled(string reason);
    event WinningsClaimed(address indexed account, uint256 payoutAmount);
    event RefundClaimed(address indexed account, uint256 refundAmount);

    constructor(
        address usdcAddress,
        address resolverAddress,
        uint64 marketClosesAt,
        string memory id,
        string memory marketQuestion,
        string[] memory labels
    ) {
        require(usdcAddress != address(0) && resolverAddress != address(0), "zero address");
        require(marketClosesAt > block.timestamp, "invalid close time");
        require(labels.length >= 2, "must have at least 2 options");

        usdc = IERC20(usdcAddress);
        resolver = resolverAddress;
        closesAt = marketClosesAt;
        marketId = id;
        question = marketQuestion;
        optionLabels = labels;
        state = MarketState.Active;
    }

    function getOptionCount() external view returns (uint256) {
        return optionLabels.length;
    }

    function getOptionLabels() external view returns (string[] memory) {
        return optionLabels;
    }

    /**
     * @notice Deposit USDC and buy shares in a specific option
     */
    function buyShares(uint8 optionId, uint256 amount) external {
        require(state == MarketState.Active, "market not active");
        require(block.timestamp < closesAt, "market closed");
        require(optionId < optionLabels.length, "invalid option id");
        require(amount > 0, "zero amount");
        require(usdc.transferFrom(msg.sender, address(this), amount), "USDC transfer failed");

        userOptionShares[msg.sender][optionId] += amount;
        totalUserDeposits[msg.sender] += amount;
        optionPools[optionId] += amount;
        totalMarketPool += amount;

        emit SharesBought(msg.sender, optionId, amount);
    }

    /**
     * @notice Admin / Resolver resolves the market with winning outcome option
     * @dev Implements Polymarket zero-winner rule: if winningOptionPool == 0, auto-void for refunds.
     */
    function resolve(uint8 targetWinningOptionId) external {
        require(msg.sender == resolver, "not resolver");
        require(state == MarketState.Active, "already finalized");
        require(block.timestamp >= closesAt, "trading still active");
        require(targetWinningOptionId < optionLabels.length, "invalid option id");

        // POLYMARKET REFUND RULE: If 0 shares were bought in winning option, auto-cancel for 100% refund
        if (optionPools[targetWinningOptionId] == 0) {
            state = MarketState.Cancelled;
            emit MarketCancelled("Zero shares in winning option - auto refund triggered");
        } else {
            winningOptionId = int16(uint16(targetWinningOptionId));
            state = MarketState.Resolved;
            emit MarketResolved(targetWinningOptionId, totalMarketPool, optionPools[targetWinningOptionId]);
        }
    }

    /**
     * @notice Force-cancel market (e.g. game postponed or abandoned)
     */
    function cancelMarket(string memory reason) external {
        require(msg.sender == resolver, "not resolver");
        require(state == MarketState.Active, "already finalized");
        state = MarketState.Cancelled;
        emit MarketCancelled(reason);
    }

    /**
     * @notice Calculate winning payout for an account
     */
    function calculatePayout(address account) public view returns (uint256) {
        if (state != MarketState.Resolved || winningOptionId < 0 || claimed[account]) {
            return 0;
        }
        uint8 winId = uint8(uint16(winningOptionId));
        uint256 winningShares = userOptionShares[account][winId];
        if (winningShares == 0) return 0;

        uint256 totalWinningShares = optionPools[winId];
        return (winningShares * totalMarketPool) / totalWinningShares;
    }

    /**
     * @notice Claim winning payout when market resolves
     */
    function claimWinnings() external {
        require(state == MarketState.Resolved, "market not resolved");
        require(!claimed[msg.sender], "already claimed");

        uint256 payout = calculatePayout(msg.sender);
        require(payout > 0, "no winning payout available");

        claimed[msg.sender] = true;
        require(usdc.transfer(msg.sender, payout), "payout transfer failed");

        emit WinningsClaimed(msg.sender, payout);
    }

    /**
     * @notice Withdraw 100% of user stakes if market is cancelled/voided
     */
    function claimRefund() external {
        require(state == MarketState.Cancelled, "market not cancelled");
        require(!claimed[msg.sender], "already claimed");

        uint256 refundAmount = totalUserDeposits[msg.sender];
        require(refundAmount > 0, "no deposits to refund");

        claimed[msg.sender] = true;
        require(usdc.transfer(msg.sender, refundAmount), "refund transfer failed");

        emit RefundClaimed(msg.sender, refundAmount);
    }
}
