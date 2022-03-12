/* 
统计一个数字在排序数组中出现的次数。

示例 1:
输入: nums = [5,7,7,8,8,10], target = 8
输出: 2

示例 2:
输入: nums = [5,7,7,8,8,10], target = 6
输出: 0
 
提示：
0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return ans;
}

var search = function(nums, target) {
    // 方法一：暴力求解
    /* let count = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i] == target) {
            count ++;
        }
    }
    return count;
    */
    
    // 方法二：二分法
    let ans = 0;
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        // 当左指针与右指针重合并且两个指针所指向的数值相等，且右指针没有超出数组边界，则得出答案
        ans = rightIdx - leftIdx + 1;
    }
    return ans;
};