/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    // 左右括号所剩的数量，str是当前生成的括号字符串
    const dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) { // 字符串构建完成
            res.push(str);    // 加入解集
            return;  // 结束当前递归分支
        }
        if (lRemain > 0) {
            // 只要左括号有剩，就可以选它，然后继续递归做选择
            dfs(lRemain-1, rRemain, str + '(');  
        }
        if (lRemain < rRemain) {
            // 右括号比左括号剩的多,才能选右括号
            // 因为剩下的)比(少的话,使用的)比(多,不能成双成对
            dfs(lRemain, rRemain - 1, str + ')');
        }
    }
    dfs(n, n, "");  // 递归入口，剩余数量都是n，初始字符串为空串
    return res;
};
// @lc code=end

