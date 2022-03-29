/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    const dfs = (node, upper, lower) => {
        if (!node) return true;
        if (node.val >= upper || node.val <= lower) return false;
        return dfs(node.left, node.val, lower) && dfs(node.right, upper, node.val);
    }
    return dfs(root, +Infinity, -Infinity);
};
// @lc code=end

