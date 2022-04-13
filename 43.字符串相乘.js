/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let pos = new Array(len1 + len2).fill(0);

    for (let i=len1-1; i >= 0; i--) {
        let n1 = +num1[i];
        for (let j=len2-1; j >= 0; j--) {
            let n2 = +num2[j];
            let multi = n1 * n2;
            let sum = pos[i + j + 1] + multi;

            pos[i + j + 1] = sum % 10;
            pos[i + j] += sum / 10 | 0;

        }
    }
    while (pos[0] == 0) {
        pos.shift();
    }
    return pos.length ? pos.join('') : '0';
};
// @lc code=end

