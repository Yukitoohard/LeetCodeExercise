/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 确定dp数组（dp table）以及下标的含义
    // dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径
    let dp = new Array(m).fill().map(item => new Array(n));
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (i < 1 || j < 1) {
                // dp数组的初始化
                // 首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理
                dp[i][0] = 1;
                dp[0][j] = 1;
            }
            else 
                // 递推公式
                // 想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};
// @lc code=end

