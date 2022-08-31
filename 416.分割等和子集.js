/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 只要找到集合里能够出现 sum / 2 的子集总和，就算是可以分割成两个相同元素和子集
    // 背包的体积为sum / 2
    // 背包要放入的商品（集合里的元素）重量为 元素的数值，价值也为元素的数值
    // 背包如果正好装满，说明找到了总和为 sum / 2 的子集。
    // 背包中每一个元素是不可重复放入
    // 因此可套用01背包，元素可重复放入的是完全背包
    let len = nums.length

    let sum  = nums.reduce((p, v) => p + v);
    if (sum & 1) return false;
    // if (sum % 2 == 1) return false;

    // dp[j]表示 背包总容量是j，最大可以凑成j的子集总和为dp[j]
    // 背包的总容量最大为sum / 2
    let dp = new Array(sum / 2 + 1).fill(0);

    for (let i = 0; i < len; i++) {
        for (let j = sum / 2; j >= nums[i]; j--) {  // 每一个元素一定是不可重复放入，所以从大到小遍历
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);

            // dp[j]的数值一定是小于等于j的。、
            // 如果dp[j] == j 说明，集合中的子集总和正好可以凑成总和j
            if (sum / 2 === dp[j]) return true;
        }
    }
    
    return sum / 2 === dp[sum / 2];
};
// @lc code=end

