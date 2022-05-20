/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    // 四种情况
    // 所有元素之前[0, -1], right + 1 = 0
    // 等于数组中某一个元素（循环中处理了）return middle
    // 插入数组中的位置[left, right], return right + 1
    // 插入数组所有元素之后[left, right], return right + 1
    return right + 1;
};
// @lc code=end

