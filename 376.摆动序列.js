/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


var wiggleMaxLength = function(nums) {
    // 方法一: 贪心算法
    // 局部最优：删除单调坡度上的节点（不包括单调坡度两端的节点），那么这个坡度就可以有两个局部峰值。
    // 整体最优：整个序列有最多的局部峰值，从而达到最长摆动序列。
    // 实际操作上，其实连删除的操作都不用做，因为题目要求的是最长摆动子序列的长度，所以只需要统计数组的峰值数量就可以了（相当于是删除单一坡度上的节点，然后统计长度）
    // 时间复杂度：O(n)
    // 空间复杂度：O(1)
    /*
    if (nums.length <= 1) return nums.length;
    let curDiff = 0;  // 当前一对差值
    let preDiff = 0;  // 前一对差值
    let result = 1;  // 记录峰值个数，默认序列最右边有一个峰值

    for (let i = 0; i < nums.length; i++) {
        curDiff = nums[i + 1] - nums[i - 1];
        
        // 出现峰值
        if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
            result++;
            preDiff = curDiff;
        }
    }
    return result;
    */

    // 方法二: 动态规划
    if (nums.length === 1) return 1;
    // 考虑前i个数，当第i个值作为峰谷时的情况（则第i-1是峰顶）
    let down = 1;
    // 考虑前i个数，当第i个值作为峰顶时的情况（则第i-1是峰谷）
    let up = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            // 峰谷
            down = Math.max(up + 1, down);
        }
        if (nums[i] > nums[i - 1]) {
            // 峰顶
            up = Math.max(down + 1, up);
        }
    }
    return Math.max(down, up);
};
// @lc code=end

