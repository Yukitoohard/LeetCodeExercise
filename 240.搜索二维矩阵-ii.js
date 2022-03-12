/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    // 方法一：暴力解法
    /* if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return false;
    }
    let rows = matrix.length, columns = matrix[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] == target) {
                return true;
            }
        }
    }
    return false;
    */ 
    // 方法二
    if (!matrix.length) {
        return false;
    }
    let i = matrix.length - 1, j = 0;
    while(i >= 0 && j < matrix[0].length) {
        if (matrix[i][j] > target) {
            i--;
        }
        else if (matrix[i][j] < target) {
            j++;
        }
        else return true;
    }
    return false;
};