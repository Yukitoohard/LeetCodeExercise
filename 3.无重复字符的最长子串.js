/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 哈希集合存放滑动窗口，记录每个字符是否出现过
    const win = new Set();
    const len = s.length;
    // 右指针，初始值为-1，相当于在字符串的左边界的左侧，还没开始移动
    let res = 0, right = -1;  
    for (let i=0; i < len; i++) {
        if (i) {
            // 左指针向右移动一格，移除一个字符
            win.delete(s.charAt(i-1));
        }
        while (right+1 < len && !win.has(s.charAt(right+1))) {
            // 不断移动右指针，右指针要有下一位才能往右移动
            // 而且滑动窗口哈希表中不该有第right+1位
            win.add(s.charAt(right+1))
            right++;
        }
        // 第i到right个字符是一个极长的无重复字符子串
        res = Math.max(res, right-i+1);
    }
    
    return res;

};
// @lc code=end

