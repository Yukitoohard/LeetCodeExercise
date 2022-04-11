/**
描述
请补全JavaScript代码，要求返回参数数字的千分位分隔符字符串。

示例1
输入：
_comma(12300)
输出：
'12,300'
 */

function _comma(number) {
    // 补全代码
    let negative = '';
    if (number < 0) {
        negative = '-'
        number = Math.abs(number);
    }
    let str = number.toString();
    let n = str.split('').reverse();
    for (let i=3; i<n.length; i=i+4){
        n.splice(i, 0, ',');
    }
    return negative+n.reverse().join('');
}