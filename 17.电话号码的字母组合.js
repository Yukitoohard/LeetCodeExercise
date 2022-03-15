/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    if (digits.length == 0) return [];
    let res = [];
    // let map = new Map([
    //     ["2", "abc"],
    //     ["3", "def"],
    //     ["4", "ghi"],
    //     ["5", "jkl"],
    //     ["6", "mno"],
    //     ["7", "pqrs"],
    //     ["8", "tuv"],
    //     ["9", "wxyz"]
    // ]);
    let myMap = {
        "2" : "abc",
        "3" : "def",
        "4" : "ghi",
        "5" : "jkl",
        "6" : "mno",
        "7" : "pqrs",
        "8" : "tuv",
        "9" : "wxyz"
    }

    // 方法一：dfs回溯
    /*
    // 当前构建字符串为curStr，现在翻译到第i个数字，i是扫描指针
    const dfs = (curStr, i) => {
        if (i > digits.length - 1) { // 指针越界，递归出口，将所获得的字符串放进res中
            res.push(curStr); 
            return;
        }

        // const letters = map.get(digits[i]);
        const letters = myMap[digits[i]];  // 当前数字对应的字母，每个数字对应3-4个字母
        for (const letter of letters) {  // 一个字母是一个选择，对应一个递归分支
            dfs(curStr + letter, i + 1);  // 把遍历到的字母拼接到当前字符串curStr中，指针i右移
        }
    }

    dfs("", 0)  // 递归入口，初识字符串为“”， 从下标0开始翻译
    */ 

    // 方法二：bfs层序遍历
    res.push("");

    for (let i=0; i<digits.length; i++) {  // bfs的层数，也就是digits的长度
        const levelSize = res.length;  //当前层的节点数
        for (let j=0; j<levelSize; j++) {  // 逐个让当前层的节点出列
            const curStr = res.shift();  // 出列
            const letters = myMap[digits[i]];
            for (const letter of letters) {
                res.push(curStr + letter); // 生成新的字母串入列
            }
        }
    }
    return res;  // 队列中全是最后一层生成的字母串
};
// @lc code=end

