/**
 * 描述
已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
1、返回一个函数 result，该函数接受一个参数
2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致
示例1
输入：
var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');
输出：
Hello, Ellie!!!
 */

function partial(fn, str1, str2) {
    return function (str3) {
        return fn(str1, str2, str3)
    }
}

// 本质上是偏函数的实现
// 函数柯里化也可以返回偏函数，达到参数复用的目的。
function partial1(fn, str1, str2) {
    return function () {
        let args = Array.prototype.slice.call(arguments, 0);
        return fn.apply(this, [str1, str2].concat(args));
    }
}
