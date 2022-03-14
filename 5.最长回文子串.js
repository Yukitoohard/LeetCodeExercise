/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
    // 方法一：动态规划
    /* 
    let len = s.length;

    let longestPalindromeLen = 0, longestPalindromeStr = "";
    let dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
    // console.log(dp);

    const updatePalindrome = (left, right) => {
        const n = right - left + 1;
        if (longestPalindromeLen < n) {
            longestPalindromeLen = n;
            longestPalindromeStr = s.slice(left, right + 1);
        }
    }

    // 状态转移方程dp[i][j] = dp[i+1][j-1] && s[i] === s[j]
    // 对于所有的i === j，dp[i][j] = true
    // 对于所有的i !== j，dp[i][j] = false
    for (let j=0; j<len; j++) {
        dp[j][j] = true;
        updatePalindrome(j, j);
        if( s[j-1] === s[j]) {
            dp[j-1][j] = true;
            updatePalindrome(j-1, j);
        }
        for(let i=j-2; i >= 0; i--) {
            if (dp[i+1][j-1] && s[i] === s[j]) {
                dp[i][j] = true;
                updatePalindrome(i, j);
            }
        }
    }

    return longestPalindromeStr;
    */

    // 方法二：中心扩散
    let res = "";
    for (let i=0; i<s.length; i++) {
        // 处理奇数长度
        const s1 = palindrome(s, i, i);
        // 处理偶数长度
        const s2 = palindrome(s, i, i+1);

        res = res.length < s1.length ? s1 : res;
        res = res.length < s2.length ? s2 : res;
    }
    return res;
    // 返回以l，r为中心点的最长回文串
    function palindrome (s, l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            l--;
            r++;
        }
        return s.slice(l+1, r);
    }
};

// @lc code=end
let s="aaaaa"
console.log(longestPalindrome(s));