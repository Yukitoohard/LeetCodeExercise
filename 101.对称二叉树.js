/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 方法一：递归
    /*
    const dfs = (p, q) => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val == q.val && dfs(p.left, q.right) && dfs(p.right, q.left);
    }
    return dfs(root.left, root.right);
    */

    // 方法二：迭代
    const dfs = (u, v) => {
        let q = [];
        q.push(u);
        q.push(v);

        while (q.length) {
            u = q.shift();
            v = q.shift();

            if (!u && !v) continue;
            if ((!u || !v) || (u.val !== v.val)) return false;

            q.push(u.left);
            q.push(v.right);
            q.push(u.right);
            q.push(v.left);
        }
        return true;
    }
    return dfs(root.left, root.right);
};
// @lc code=end

