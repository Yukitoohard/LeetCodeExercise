/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // 把t中每个字符存入哈希表中，key为字符，value为字符出现次数
    let need = {};
    // 窗口中的字符
    let win = {};
    // 左右指针
    let left = 0, right = 0;
    // 最小覆盖子串的长度
    let minLen = Infinity;
    // 验证s中出现t中字符的个数
    let valid = 0;
    // 最小覆盖子串的起始索引
    let start = 0
    
    for (let c of t) {
        // 遍历字符串存入哈希表need中
        if (!need[c]) need[c] = 1;
        else need[c] += 1;
    }
    // 把t字符个数存为变量
    var tLen = Object.keys(need).length;
    
    while (right < s.length) {
        // 即将移入窗口的字符
        let c = s[right];
        // 右移窗口
        right++;
        if (need[c]) {
            // 当前字符在need中，则更新当前窗口字符统计
            win[c] = (win[c] || 0) + 1;
            if (win[c] == need[c]) {
                // 当前窗口和need中的字符匹配时，验证数量加1
                valid++;
            }
        }
        // 当验证数量与需要的字符个数一致时，就应该收缩窗口了
        while (valid == tLen) {
            // 更新最小覆盖子串
            if (right - left < minLen) {
                // 下一个覆盖子串的起始索引
                start = left;
                minLen = right - left;
            }
            // 即将移出窗口的字符
            let d = s[left];
            // 左指针向右移
            left++;
            if (need[d]) {
                // 如果移出的窗口字符是需要的字符，则哈希表对应value减1
                if (win[d] == need[d]) {
                    valid--;
                }
                // 窗口字符减1
                win[d]--;
            }
        }
        
    }
    return minLen == Infinity ? "" : s.substr(start, minLen);
    
};
// @lc code=end
