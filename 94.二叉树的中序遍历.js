/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 方法一：递归
    /*
    let res = [];
    
    const dfs = (node) => {
        if (!node) return [];
        dfs(node.left); 
        res.push(node.val);
        dfs(node.right)
    }
    dfs(root);
    return res;
    */

    // 方法二：迭代
    let res = [];
    let stack = [];
    while (root || stack.length) {
        while (root) {
            // 不断将左节点压栈
            stack.push(root);
            root = root.left;
        }
        // 栈顶节点出栈
        root = stack.pop();
        res.push(root.val);
        // 出栈的同时，把它的右子节点压入栈，相当于递归右子节点
        root = root.right;
    }
    return res;
};
// @lc code=end

