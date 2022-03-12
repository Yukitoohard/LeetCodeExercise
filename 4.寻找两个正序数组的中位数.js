/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 方法一 暴力
    /*
    let arr = nums1.concat(nums2).sort((a, b) => a-b);
    console.log(arr);
    let len = arr.length;
    let res = 0;
    if (len % 2 == 0) {
        let m = len/2-1
        let n = len/2;
        res = (arr[m] + arr[n]) / 2
    }
    else {
        let m = Math.floor(len/2)
        res = arr[m]
    }
    
    return res;
    */
    // 方法二 二分查找
    // 在较短的数组上确定分割线的位置，这样能确保较长的数组左右两侧都有元素，防止数组下标越界
    
    // nums1长度比nums2小，把较短的数组作为第一个数组，方便后续编码
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    let m = nums1.length;
    let n = nums2.length;
    // 在nums1的区间0~m中查找恰当的分割线
    // 使得nums1[i-1] <= nums2[j] && nums2[j-1] <= nums1[i]，交叉小于等于的关系
    let left = 0;
    let right = m;

    let median1 = 0, median2 = 0;

    while (left <= right) {
        // 分割线在第一个数组右边的第一个元素的下标i = 分割线在第一个数组左边的元素个数
        const i = left + Math.floor((right-left+1) / 2);
        // 分割线在第二个数组右边的第一个元素的下标j = 分割线在第二个数组左边的元素个数
        // i+j = (m+n+1)/2
        const j = Math.floor((m+n+1) / 2) - i;

        // 边界
        // i-1/j-1表示在分割线的左边
        const maxLeft1 = i === 0 ? -Infinity : nums1[i-1];
        const minRight1 = i === m ? Infinity : nums1[i];

        const maxLeft2 = j === 0 ? -Infinity : nums2[j-1];
        const minRight2 = j === n ? Infinity : nums2[j];

        if (maxLeft1 <= minRight2) {
            // 满足分割线两边交叉小于等于
            // 下一轮搜索的区间[i, right]
            median1 = Math.max(maxLeft1, maxLeft2);
            median2 = Math.min(minRight1, minRight2);
            left = i + 1;
        }
        else {
            // 下一轮搜索的区间[left, i-1]
            right = i - 1;
        }
    }
    return (m + n) % 2 == 0 ? (median1 + median2) / 2 : median1;
};
// @lc code=end

