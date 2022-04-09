/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    // 方法一：递归
    /*
    let max = 0;
    if (!root) return 0;

    let left_count = maxDepth(root.left);
    let right_count = maxDepth(root.right);
    max = Math.max(left_count, right_count) + 1;
    return max;
    */

    // 方法二：迭代
    if (!root) return 0;
    let max = 0;
    let queue = [];
    queue.push(root);

    while (queue.length) {
        let size = queue.length;
        
        while (size > 0) {
            // node定义要在循环里，队头出列，不能用pop，pop是栈的操作
            let node = queue.shift();  
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            size--;
        }
        max++;
    }
    return max;
};
// @lc code=end

