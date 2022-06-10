/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // 方法一 暴力
    /*
    for (let i=0; i<nums.length; i++) {
        nums[i] *= nums[i];
    }
    nums.sort((a, b) => {return a-b;});
    return nums;
    */

    // 方法二 双指针
    // 数组有序,但负数平方可能成为最大数
    // 数组平方的最大值就在数组两端,不可能在中间
    let n = nums.length;
    // 定义新数组存放结果，长度与原数组一致,k指向新数组终止位置
    let res = new Array(n).fill(0);
    // i指向起始位置，j指向终止位置，数组下标从0开始
    let i = 0, j = n - 1, k = n - 1;
    while (i <= j) {
        if (nums[i] * nums[i] < nums[j] * nums[j]) {
            res[k--] = nums[j] * nums[j];
            j--;
        }
        else {
            res[k--] = nums[i] * nums[i];
            i++;
        }
    }
    return res;
};
// @lc code=end

