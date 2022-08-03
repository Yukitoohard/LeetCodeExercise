/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for (let c of magazine) {
        map[c.charCodeAt() - base]++;
    }
    for (let c of ransomNote) {
        if (!map[c.charCodeAt() - base]) return false;
        map[c.charCodeAt() - base]--;
    }
    return true;
};
// @lc code=end

