/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n).fill(0).map(() => new Array(n).fill(0));  // 定义二维数组
    let startx = 0, starty = 0;  // 定义每循环一个圈的起始位置
    let loop = Math.floor(n / 2);  // 每个圈循环几次，例如n为奇数3，那么loop=1，只循环一圈，矩阵中的值需要单独处理
    let mid = Math.floor(n / 2);  // 矩阵中间的位置，例如n=3，中间位置就是(1, 1)，n=5，中间位置为(2, 2);

    let count = 1;  // 用来给矩阵中每一个空格赋值
    let offset = 1;  // 每一圈循环，需要控制每一条边遍历的长度
    let i, j;

    while (loop--) {
        i = startx;
        j = starty;

        // 下面开始的四个for循环就是模拟转了一圈
        // 模拟填充上行从左到右（左闭右开）
        for (j = starty; j < starty + n - offset; j++) {
            res[startx][j] = count++;
        }
        // 模拟填充右列从上到下（左闭右开）
        for (i = startx; i < startx + n - offset; i++) {
            res[i][j] = count++;
        }
        // 模拟填充下行从右到左（左闭右开）
        for (; j>starty; j--) {
            res[i][j] = count++;
        }
        // 模拟填充左列从下到上（左闭右开
        for (; i>startx; i--) {
            res[i][j] = count++;
        }

        // 第二圈开始的时候，起始位置要格加1，例如第一圈起始位置为(0, 0)，第二圈起始位置为(1, 1)
        startx++;
        starty++;

        // 控制每一圈里每一条边遍历的长度
        offset += 2;
    }

    // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
    if (n % 2) {
        res[mid][mid] = count;
    }
    return res;
};
// @lc code=end

