/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 数组的元素在内存地址中式连续的，不能单独删除数组中的某个元素，只能覆盖
    // 快慢指针
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (val != nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow
};
// @lc code=end

