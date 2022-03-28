/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
通常我们遍历子串或者子序列有三种遍历方式
- 以某个节点为开头的所有子序列: 如 [a]，[a, b]，[ a, b, c] ... 再从以 b 为开头的子序列开始遍历 [b] [b, c]。
- 根据子序列的长度为标杆，如先遍历出子序列长度为 1 的子序列，在遍历出长度为 2 的 等等。
- 以子序列的结束节点为基准，先遍历出以某个节点为结束的所有子序列，因为每个节点都可能会是子序列的结束节点，因此要遍历下整个序列，如: 以 b 为结束点的所有子序列: [a , b] [b] 以 c 为结束点的所有子序列: [a, b, c] [b, c] [ c ]。
*/
var maxSubArray = function(nums) {
    // 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}   
    // 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)
    // 代码一
    /*
    if (!nums.length) return;
    let max_ending_here = nums[0];
    let max_so_far = nums[0];
    for (let i=1; i<nums.length; i++) {
        max_ending_here = Math.max(nums[i], max_ending_here+nums[i]);
        max_so_far = Math.max(max_ending_here, max_so_far);
    }
    return max_so_far;
    */
    // 代码二
    let ans = nums[0];
    let sum = 0;
    for (let num of nums) {
        // if (sum > 0)
        if (sum + num > num) {
            sum = sum + num;
        }
        else {
            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
// @lc code=end

