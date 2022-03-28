/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 方法一：排序
    /*
    const map = new Map();
    for (let str of strs) {
        let arr = Array.from(str);  // 把新单词转换成数组，如"eat"->['e', 'a', 't']
        // 互为字母异位词的两个字符串包含的字母相同，因此对两个字符串分别进行排序之后得到的字符串一定是相同的
        arr.sort(); 
        // 将排序后的字符串作为哈希表的key 
        let key = arr.toString();
        // 如果哈希表中有该key值，则将其存储的数组赋值给list，否则创建key对应的空数组以存储对应的字符串（异位词）
        let list = map.get(key) ? map.get(key) : new Array();
        // 把异位词存入list中
        list.push(str);
        // 更新哈希表
        map.set(key, list);
    }
    // 哈希表中的值整合成一个数组输出
    return Array.from(map.values());
    */

    // 方法二：计数
    // 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的，
    // 所以将每个字母出现的次数使用字符串表示，作为哈希表的键。
    const map = new Object();
    for (let str of strs) {
        const count = new Array(26).fill(0);
        for (let c of str) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        map[count] ? map[count].push(str) : map[count] = [str];
    }
    return Object.values(map);
    
};
// @lc code=end

