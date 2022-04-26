/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(!amount) return 0;
    // 初始化数组为最大值
    let dp = new Array(amount+1).fill(Infinity);
    // 当金额为0时需要的硬币数目为0
    dp[0] = 0;

    for (let i=0; i<coins.length; i++) {  // 遍历物品
        // 正序遍历：完全背包每个硬币可以选择多次
        for (let j=coins[i]; j<=amount; j++) {  // 遍历背包
            // 选择硬币数目最小的情况
            dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
        }
    }

    // 没找到能装满背包的就返回-1
    return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

