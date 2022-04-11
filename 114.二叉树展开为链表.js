/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    const list = [];
    preorder(root, list);
    const size = list.length;
    for (let i=1; i<size; i++) {
        const prev = list[i-1], cur = list[i];
        // 记得把左子树置空
        prev.left = null;
        prev.right = cur;
    }
    return root;
};
// 前序遍历
const preorder = (root, list) => {
    if(!root) return [];
    
    list.push(root);
    preorder(root.left, list);
    preorder(root.right, list);
}
// @lc code=end

