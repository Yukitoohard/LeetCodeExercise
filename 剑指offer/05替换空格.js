/*
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1：
输入：s = "We are happy."
输出："We%20are%20happy."

限制：
0 <= s 的长度 <= 10000
*/

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    // return s.replaceAll(' ', '%20');
    s = s.split(''); // 把字符串拆分成数组
    let oldLen = s.length;
    let spacecount = 0;
    for (let i=0; i < oldLen; i++) {
        if (s[i] === ' ') {
            spacecount ++;  // 计算字符串中空格数量
        }
    }
    s.length += spacecount * 2;  
    // 因为原数组里有一个空格，替换为'20%'需要3个空格，所以每个空格只需要再额外添加两个空格
    for (let i = oldLen-1, j = s.length-1; i >= 0; i--, j--) {
        // 创建两个指针，一个指向数组末尾，一个指向字符串有效位的末尾，实现原地修改
        // 注！！数组遍历一定要从后往前，避免从前往后，造成字符被修改，导致错误！
        if (s[i] !== ' ') {
            s[j] = s[i];
        }
        else {
            s[j-2] = '%';
            s[j-1] = '2';
            s[j] = '0';
            j -= 2;
        }
    }
    return s.join('');  // 有分有合
};