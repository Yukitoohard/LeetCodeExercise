/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /*
    // 第一次遍历时指针j记录当前有多少非0元素
    // 每遇到一个非0元素就将其往数组左边挪，第一次遍历完后，j指针的下标就指向了最后一个非0元素下标
    let i = 0, j = 0;
    while (i < nums.length) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            j++;
        }
        i++;
    }
    // 第二次遍历补0
    while (j < nums.length) {
        nums[j++] = 0;
    }
    */
    // 交换
    let i = 0, j = 0, n = nums.length;
    while (j < n) {
        if (nums[j] != 0) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            i++;
        }
        j++;
    }
};
// @lc code=end

