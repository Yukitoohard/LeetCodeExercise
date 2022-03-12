/**
 * 描述
给定字符串 str，检查其是否包含数字，包含返回 true，否则返回 false

示例1
输入：
'abc123'
输出：
true
 */

function containsNumber(str) {
    for (let i=0; i<10; i++) {
        if (str.indexOf(i) !== -1) return true;
    }
    return false;
}

function containsNumber2(str) {
    for (let i = 0; i<str.length; i++) {
        if (!isNaN(str.charAt(i) + 1)) {
            return true;
        }
    }
    return false;
}

function containsNumber3(str) {
    let b = /\d/;
    return b.test(str);
}

let testStr = 'abc123';
console.log(containsNumber2(testStr));