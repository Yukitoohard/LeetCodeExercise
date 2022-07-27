/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a-b); 
    s = s.sort((a, b) => a-b);

    // 方法一：局部最优就是大饼干喂给胃口大的，充分利用饼干尺寸喂饱一个，全局最优就是喂饱尽可能多的小孩
    // let index = s.length - 1;
    // let result = 0;
    // for (let i=g.length - 1; i >= 0; i--) {
    //     if (index >= 0 && s[index] >= g[i]) {
    //         result++;
    //         index--;
    //     }
    // }
    // return result;

    // 方法二：小饼干先喂饱小胃口
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        if (index < g.length && g[index] <= s[i]) {
            index++;
        }
    }
    return index;
};
// @lc code=end

