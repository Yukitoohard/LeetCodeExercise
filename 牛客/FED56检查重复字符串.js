/**
 * 描述
给定字符串 str，检查其是否包含连续重复的字母（a-zA-Z），包含返回 true，否则返回 false

示例1
输入：
'rattler'
输出：
true
 */

function containsRepeatingLetter(str) {
    let pattern = /([a-zA-Z])\1/; // \0表示匹配自身 \1表示匹配重复一次
    return pattern.test(str); 
}

let testStr = 'rattler';
console.log(containsRepeatingLetter(testStr));