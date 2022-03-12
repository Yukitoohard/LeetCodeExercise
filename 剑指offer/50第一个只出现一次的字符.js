/*
在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

示例 1:
输入：s = "abaccdeff"
输出：'b'

示例 2:
输入：s = "" 
输出：' ' 

限制：
0 <= s 的长度 <= 50000
*/

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
    if (!s) {
        return " ";
    }
    // 哈希表两次遍历
    let map = new Map();
    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        }
        else {
            map.set(char, 1);
        }
    }
    for (let char of map.keys()) {
        if (map.get(char) === 1) {
            return char;
        }
    }
    return " "; // 如果字符串里只有一个重复字符，那么返回空格
};