/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 方法一：贪心
    // 局部最优：收集每天的正利润，全局最优：求得最大利润
    // 收集正利润的区间，就是股票买卖的区间，而我们只需要关注最终利润，不需要记录区间。
    let result = 0;
    for (let i=1; i < prices.length; i++) {
        result += Math.max(prices[i] - prices[i-1], 0);
        // if (prices[i] - prices[i-1] > 0) {
        //     result += prices[i] - prices[i-1]
        // }
    }
    return result;

};
// @lc code=end

