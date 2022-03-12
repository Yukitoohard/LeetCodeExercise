/**
描述
求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题
示例1
输入：
3, 0.0001
输出：
0.0003
 */

function multiply(a, b) {
    // 1. 先将两个数转成字符串
    let str1 = a.toString();
    let str2 = b.toString();
    
    // 2. 获取小数点后的位数， 不一定有小数位
    let lenA = (str1.indexOf('.') === -1) ? 0 : (str1.length - str1.indexOf('.') - 1);
    let lenB = (str2.indexOf('.') === -1) ? 0 : (str2.length - str2.indexOf('.') - 1);
    
    // 3. 取最精确的小数位数
    let len = Math.max(lenA, lenB);
    // 把数字转换为字符串，结果的小数点后有指定位数的数字
    // toFixed()方法可把Number四舍五入为指定小数位数的数字
    return (a * b).toFixed(len);
}

console.log(multiply(3, 0.1));