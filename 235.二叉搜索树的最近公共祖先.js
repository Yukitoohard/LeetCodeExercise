/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let res;
    const dfs = (root, p, q) => {
        if (!root) return null;
        let lson = dfs(root.left, p, q);
        let rson = dfs(root.right, p, q);

        if ((lson && rson) || ((root.val == p.val || root.val == q.val) && (lson || rson))) {
            res = root;
        }
        return lson || rson || (root.val == p.val || root.val == q.val);
    }
    dfs(root, p, q)
    return res;
};
// @lc code=end

