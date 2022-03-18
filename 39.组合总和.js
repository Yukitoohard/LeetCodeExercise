/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    // start是当前选择的起点索引，temp是当前集合，sum是当前的和
    const dfs = (start, temp, sum) => {
        if (sum >= target) {
            // 当前求和大于target，不能选下去了，返回结束当前分支
            if (sum == target) {
                // 求和正好等于target，放入解集并返回
                res.push(temp.slice())  // temp的拷贝，加入解集
            }
            return;
        }
        // 枚举当前可选的数，从start开始
        for (let i=start; i<candidates.length; i++) {
            // 选这个数
            temp.push(candidates[i]);
            // 基于此继续选择，传i，下一次就不会选到i左边的数
            dfs(i, temp, sum + candidates[i]);
            // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
            temp.pop();
        }
    } 
    dfs(0, [], 0);  // 递归入口
    return res;
};
// @lc code=end

