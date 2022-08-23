/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = new Array(m).fill().map(item => new Array(n).fill(0));  // 如果不填充0，后面循环continue跳过的位置没有数值会报错

    // 如果在起点或终点出现了障碍，直接返回0
    if (obstacleGrid[m - 1][n - 1] == 1 || obstacleGrid[0][0] == 1) return 0

    for (let i=0; i < m && obstacleGrid[i][0] === 0; i++) {
        dp[i][0] = 1;
    }
    for (let j=0; j < n && obstacleGrid[0][j] === 0; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log(dp);
    return dp[m-1][n-1];
};
// @lc code=end

let arr = [[0,0,0],[0,1,0],[0,0,0]]
uniquePathsWithObstacles(arr)