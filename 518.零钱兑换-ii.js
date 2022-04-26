/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // 定义dp数组
    let dp = new Array(amount+1).fill(0);
    // 初始化，0大小的背包，不装任何东西，所以是一种方法
    dp[0] = 1;

    // 遍历顺序
    // 遍历物品
    for (let i=0; i<coins.length; i++) {
        // 遍历背包
        for (let j=coins[i]; j <= amount; j++) {
            // 推导公式
            dp[j] += dp[j - coins[i]];
        }
    }

    return dp[amount];
};
// @lc code=end

