/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 方法一 暴力超时
    /* let max = 0;
    for (let i=0; i<prices.length; i++) {
        for (let j=i+1; j<prices.length; j++) {
            let profit = prices[j] - prices[i];
            max = Math.max(max, profit);
        }
    }
    return max;
    */

    // 方法二 一次遍历
    let max = 0, minPrice = +Infinity;
    for (let i=0; i<prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice);
        max = Math.max(max, prices[i] - minPrice);
    }
    return max;
};
// @lc code=end

