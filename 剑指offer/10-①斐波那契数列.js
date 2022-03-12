/* 
写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：
F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.

斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：
输入：n = 2
输出：1

示例 2：
输入：n = 5
输出：5

提示：
0 <= n <= 100
*/

/**
 * @param {number} n
 * @return {number}
 */

// 方法一
 var fib = function(n) {
    let res = [];
    for (let i=0; i <= n; i++) {
        if (i == 0 || i == 1) res.push(i);
        else {
            let tmp = (res[i-1] + res[i-2]) % 1000000007;
            res.push(tmp);
        }
    }
    return res.pop();
};

// 方法二
var fib = function(n) {
    let a = 0, b = 1;;
    for (let i=0; i < n; i++) {
        let sum = (a + b) % 1000000007;
        a = b; 
        b = sum; 
    }
    return a;
};
