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
    let len = s.length;
    // if (len < 2) return s;

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
};

// @lc code=end
let s="aaaaa"
console.log(longestPalindrome(s));