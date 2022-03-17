/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // 二分查找
    // return nums.indexOf(target);
    if (!nums.length) return -1;
    let left = 0, right = nums.length-1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) return mid;
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1;
            }  
            else {
                left = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[nums.length-1]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }
    return -1;
};
// @lc code=end

