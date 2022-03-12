/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1, b = 1;
    for (let i=0; i<n; i++) {
        sum = (a + b) % 1000000007;
        a = b; 
        b = sum;
    }
    return a;
};
// @lc code=end

