/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // 贪心
    // 局部最优：当前可移动距离尽可能多走，如果还没到终点，步数再加一。整体最优：一步尽可能多走，从而达到最小步数。
    // 要从覆盖范围出发，不管怎么跳，覆盖范围内一定是可以跳到的，以最小的步数增加覆盖范围，覆盖范围一旦覆盖了终点，得到的就是最小步数
    // 统计两个覆盖范围，当前这一步的最大覆盖和下一步最大覆盖
    if (nums.length === 1) return 0;
    let curDistance = 0;  // 当前覆盖最远距离下标
    let ans = 0;  // 记录走的最大步数
    let nextDistance = 0;  // 下一步覆盖最远距离下标
    for (let i=0; i < nums.length; i++) {
        // 更新下一步覆盖最远距离下标
        nextDistance = Math.max(nums[i] + i, nextDistance);
        // 遇到当前覆盖最远距离下标
        if (i == curDistance) {
            // 如果当前覆盖最远距离下标不是终点
            if (curDistance != nums.length - 1) {
                // 需要走下一步
                ans++;
                // 更新当前覆盖最远距离下标（相当于加油了）
                curDistance = nextDistance;
                // 下一步的覆盖范围已经可以达到终点，结束循环
                if (nextDistance >= nums.length - 1) break;
            }
            // 当前覆盖最远距离下标是集合终点，不用做ans++操作了，直接结束
            else break;
        }
    }
    return ans;
};
// @lc code=end

