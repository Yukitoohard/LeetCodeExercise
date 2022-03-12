/**
 * 给定字符串 str，检查其是否符合如下格式
1、XXX-XXX-XXXX
2、其中 X 为 Number 类型
示例1
输入：
'800-555-1212'
输出：
true
 */

function matchesPattern(str) {
    // let pattern = /^\d{3}-\d{3}-\d{4}$/;  // 注意！开头^和结尾$必须加上来限定字符串
    let pattern = /^(\d{3}-){2}\d{4}$/;
    return pattern.test(str);
}

let testStr = '1800-555-1212';
console.log(matchesPattern(testStr));