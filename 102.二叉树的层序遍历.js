/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// 返回二维数组
var levelOrder = function(root) {
    if (!root) return [];
    let q = [], res = [];
    q.push(root);
    while (q.length) {
        // 当前层的节点个数，后续入队出队会发生变化
        let currentLevelSize = q.length;
        // current数组添加当前层元素
        const current = [];
        for (let i=1; i<=currentLevelSize; i++) {
            // 把当前层的节点依次传入current数组
            const node = q.shift();
            current.push(node.val);
            // 把当前节点的左右子节点传入q中，以待后续遍历 
            if (node.left)  q.push(node.left);
            if (node.right)  q.push(node.right);
        }
        // 把当前层的一维数组传入res中
        res.push(current);
    }
    return res;
};
// @lc code=end

