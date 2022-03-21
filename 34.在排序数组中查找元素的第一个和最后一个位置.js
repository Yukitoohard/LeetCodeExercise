/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, res = nums.length;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] > target || (target <= nums[mid] && lower)) {
            right = mid - 1;
            res = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return res;
}

var searchRange = function(nums, target) {
    let res = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        res = [leftIdx, rightIdx]
    }
    return res;
};
// @lc code=end

