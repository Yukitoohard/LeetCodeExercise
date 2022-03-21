/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let used = {};  // 哈希表用来记录已经选过的数，下次遇到相同的数会直接跳过
    const dfs = (path) => {
        // 长度和原本数组长度一致，说明找到了一个排列组合
        if (path.length == nums.length) { 
            res.push(path.slice());
            return;  // 结束当前分支
        }
        for (const num of nums) {

            if (used[num])  continue;  // 剪枝
            path.push(num);  // 没用过的数加入path
            used[num] = true;  // 记录一下用过了
            dfs(path);  // 基于选了当前的数，递归
            path.pop();  // 上一句的递归结束，回溯，将最后选的数pop出来
            used[num] = false;  // 撤销这个记录
        }
    }
    dfs([]);  // 传入空path，什么都还没选
    return res;
};
// @lc code=end

