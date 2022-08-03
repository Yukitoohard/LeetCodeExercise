/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 贪心
    // 贪心算法局部最优解：每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点。
    let cover = 0;
    if (nums.length === 1) return true;  // 只有一个元素，就是能达到
    // i每次移动只能在cover的范围内移动，每移动一个元素，cover得到该元素数值（新的覆盖范围）的补充，让i继续移动下去。
    for (let i = 0; i <= cover; i++) {
        cover = Math.max(i + nums[i], cover);  
        if (cover >= nums.length - 1)  return true;
    }
    return false;
};
// @lc code=end

