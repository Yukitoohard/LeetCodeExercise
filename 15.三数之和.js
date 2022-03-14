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
    // 官方题解，感觉有点乱
    /*
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
    */

    // 方法二，感觉比较优雅
    let res = [];
    let n = nums.length;
    if (nums == null || n < 3) return res;
    nums.sort((a, b) => a - b);
    for (let i=0; i<n; i++) {
        if (nums[i] > 0) break; // 排序之后如果第一个数字大于0，则后面三数之和一定大于0

        if (i > 0 && nums[i] == nums[i-1]) continue;
        let l = i + 1, r = n - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum == 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] == nums[l+1]) l++;
                while (l < r && nums[r] == nums[r-1]) r--;
                l++;
                r--;
            }
            else if (sum < 0) l++;
            else if (sum > 0) r--;
        }
    }

    return res;
};
// @lc code=end

