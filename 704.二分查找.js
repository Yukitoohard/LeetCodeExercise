/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // return nums.indexOf(target);
    let size = nums.length;
    let left = 0, right = size - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target < nums[mid]) {
            right = mid -1;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};
// @lc code=end

