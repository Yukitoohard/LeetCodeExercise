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

// 思路：
/*
1 在字符串S中使用双指针中的左右指针技巧，初始化left = right = 0，把索引闭区间[left, right]称为一个「窗口」。
2 先不断地增加right指针扩大窗口 [left, right]，直到窗口中的字符串符合要求（包含了 t 中的所有字符）
3 停止增加right，转而不断增加left指针缩小窗口[left, right]，直到窗口中的字符串不再符合要求（不包含t中的所有字符了）。同时，每次增加left，都要更新一轮结果
4 重复第2和第3步，直到right到达字符串s的尽头
*/
// 本质：增加窗口右边界，寻找一个可行解，在找到可行解的情况下增加窗口左边界，优化可行解，找到最优解

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
