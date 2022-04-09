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
    const dfs = (node, lower, upper) => {
        // lower和upper分别为下界和上界
        // 空树也是二叉搜索树
        if (!node) return true;
        if (node.val >= upper || node.val <= lower) return false;

        // 遍历左子树时，左子树都应该比根节点小，所以上界为根节点的值
        let left = dfs(node.left, lower, node.val);
        // 遍历右子树时，右子树都应该比根节点大，所以下界为根节点的值
        let right = dfs(node.right, node.val, upper);
        return left && right;
    }
    return dfs(root, -Infinity, +Infinity);
};
// @lc code=end

