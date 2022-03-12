/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x%10 == 0 && x)) return false;
    let tmp = x, res = 0;
    while (tmp) {
        res = res*10 + tmp % 10;
        tmp = parseInt(tmp/10);
    }
    return x == res;
};
// @lc code=end

