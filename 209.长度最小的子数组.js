/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 方法一 暴力
    /* 
    let res = +Infinity;
    let sum = 0, subLength = 0;
    for (let i = 0; i< nums.length; i++) {
        sum = 0;
        for (let j=i; j<nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                subLength = j - i + 1;
                res = res > subLength ? subLength : res;
                break;
            }
        }
    }
    return res == +Infinity ? 0 : res;
    */

    // 方法二 滑动窗口，双指针的一种
    // 窗口是什么？是满足其和大于等于target的长度最小的连续子数组
    // 如何移动窗口的起始位置：若当前窗口的值大于target，窗口则向前移动（缩小）
    // 如何移动窗口的结束位置：窗口的结束位置就是遍历数组的指针。窗口的起始位置设置为数组的起始位置即可
    let res = +Infinity;
    let sum = 0; // 滑动窗口数值之和
    let i = 0;  // 滑动窗口起始位置
    let subLength = 0;  // 滑动窗口的长度
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j];
        // 用while每次更新i，并不断比较子序列是否符合条件
        while (sum >= target) {
            subLength = j - i + 1;  // 取子序列的长度
            res = res > subLength ? subLength : res;
            sum -= nums[i];  // 滑动窗口要不断变更i（子序列的起始位置）
            i++;
        }
    }
    // 如果result没有被赋值则返回0，说明没有符合条件的子序列
    return res == +Infinity ? 0 : res;
};
// @lc code=end

 