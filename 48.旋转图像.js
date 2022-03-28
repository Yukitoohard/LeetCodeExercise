/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 方法一：使用辅助数组
    /*
    let n = matrix.length;
    let newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            newMatrix[j][n-i-1] = matrix[i][j];
        }
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            matrix[i][j] = newMatrix[i][j];
        }
    }
    return matrix;
    */

    // 方法二：原地旋转
    /*
    const n = matrix.length;
    for (let i=0; i<Math.floor(n/2); i++) {
        for (let j=0; j<Math.floor((n+1)/2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[n-j-1][i];
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = temp;
        }
    }
    return matrix
    */

    // 方法三：翻转代替旋转
    const n = matrix.length;
    for (let i=0; i<Math.floor(n/2); i++) {
        for (let j=0; j<n; j++) {
            [matrix[i][j], matrix[n-i-1][j]] = [matrix[n-i-1][j], matrix[i][j]]
        }
    }
    for (let i=0; i<n; i++) {
        for (let j=0; j<i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix
    
};
// @lc code=end

