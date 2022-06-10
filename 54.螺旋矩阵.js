/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix.length) return [];
    let res = new Array();
    // 四个边界
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;

    // while循环只遍历“环”，不成环就不遍历了
    while (top < bottom && left < right) {

        for (let i = left; i < right; i++) {
            res.push(matrix[top][i]);
        }
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right]);
        }
        for (let i = right; i > left; i--) {
            res.push(matrix[bottom][i]);
        }
        for (let i = bottom; i > top; i--) {
            res.push(matrix[i][left]);
        }

        // 遍历完一个环，范围收缩，一层层由外向内处理
        left++;
        right--;
        top++;
        bottom--;
    }

    // 剩下不成环的单独判断
    // 剩一行，顺时针从左到右push进数组
    if (top == bottom) {
        for (let i=left; i<=right; i++) {
            res.push(matrix[top][i]);
        }
    }
    // 剩一列，从上到下push进数组
    else if (left == right) {
        for (let i=top; i<=bottom; i++) {
            res.push(matrix[i][left]);
        }
    }
    return res;
};
// @lc code=end

