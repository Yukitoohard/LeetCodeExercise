/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 问题可以分解成规模较小的两个子问题，且子问题的解可以复用，可使用动态规划
// G(n): 长度为n的序列能构成的不同二叉搜索树的个数
// F(i,n): 以i为根、序列长度为n的不同二叉搜索树个数(1≤i≤n)
// F(i,n)=G(i−1)⋅G(n−i)
var numTrees = function(n) {
    const G = new Array(n+1).fill(0);
    // 边界情况，当序列长度为 1（只有根）或为 0（空树）时
    G[0] = 1;
    G[1] = 1;

    for (let i=2; i<=n; i++) {
        for (let j=1; j<=i; j++) {
            G[i] += G[j-1] * G[i-j];
        }
    }
    return G[n];
};
// @lc code=end

