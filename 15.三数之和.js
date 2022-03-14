/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    // 排序
    nums.sort((a, b) => a - b);
    res = [];
    // 枚举a
    for (let first=0; first < n; first++) {
        if (first > 0 && nums[first] == nums[first - 1]) {
            // 需要和上一次枚举的数不同，去重
            continue;
        }
        let third = n - 1;
        let target = -nums[first];
        // 枚举b
        for (let second = first + 1; second < n; second++) {
            if (second > first + 1 && nums[second] == nums[second-1]) {
                continue;
            }
            // 确保b指针在c指针左侧
            while (second < third && nums[second] + nums[third] > target) {
                third--;
            }

            // 若指针重合，随着b后续的增加，就不会有满足a+b+c=0并且b<c的c了，可以退出循环
            if (second == third) {
                break;
            }
            if (nums[second] + nums[third] == target) {
                res.push([nums[first], nums[second], nums[third]])
            }
        }
    }
    return res;
};
// @lc code=end

