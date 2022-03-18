/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    // 升序排序
    candidates.sort((a, b) => a-b);
    let res = [];
    const dfs = (start, temp, sum) => {
        if (sum >= target) {
            if (sum == target) {
                res.push(temp.slice());
            }
            return
        }

        for (let i = start; i<candidates.length; i++) {
            // 当前项重复
            if (i > start && candidates[i] == candidates[i-1]) {
                continue;
            }
            temp.push(candidates[i]);
            // 当前选择的数字不能和下一个选择的数字重复，给自递归传i+1，避免与当前选的i重复
            dfs(i+1, temp, sum+candidates[i]);  
            temp.pop();
        }
    }
    dfs(0, [], 0);
    return res;
};
// @lc code=end

