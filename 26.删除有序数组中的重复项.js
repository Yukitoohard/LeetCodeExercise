/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 数组nums长度为0，则数组不包含任何元素，因此返回0
    if (nums.length == 0) return 0;
    // 数组nums长度大于0时，数组中至少包含一个元素，在删除重复元素之后也至少剩下一个元素
    // 因此nums[0]保持原状即可，从下标1开始删除重复元素
    // 快指针fast表示遍历数组到达的下标位置
    // 慢指针表示下一个不同元素要填入的下标位置
    let fast = 1, slow = 1;
    while (fast < nums.length) {
        if (nums[fast] != nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
// @lc code=end

