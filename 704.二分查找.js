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

// 二分查找前提：1）有序数组；2）无重复项
var search = function(nums, target) {
    // return nums.indexOf(target);
    // 左闭右闭区间
    let size = nums.length;
    let left = 0, right = size - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);  // 防止溢出，等同于(left + right)/2
        if (target < nums[mid]) {
            // target在左区间
            right = mid -1;  
        }
        else if (target > nums[mid]) {
            // target在右区间
            left = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};
// @lc code=end

