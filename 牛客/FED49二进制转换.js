/**
 * 描述
给定二进制字符串，将其换算成对应的十进制数字
示例1
输入：
'11000000'
输出：
192
 */

function base10(str) {
    return parseInt(str, 2);
}

function base10_2(str) {
    let arr = str.split('').reverse();
    let result = 0;
    for (let i=0; i<arr.length; i++) {
        result += arr[i] * Math.pow(2, i);
    }
    return result;
}