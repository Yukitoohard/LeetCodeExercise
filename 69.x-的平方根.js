/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    // return Math.sqrt(x);
    // 方法一 袖珍计算器算法（看不懂）
    /*
    if (x == 0) return 0;
    let ans = parseInt(Math.exp(0.5 * Math.log(x)));

    return parseInt((ans + 1) * (ans + 1) <= x ? ans + 1 : ans);
    */

    // 方法二 二分法
    let left = 0, right = x, ans = -1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        }
        
        else {
            right = mid - 1;
        }
    }
    return ans;
};
// @lc code=end

