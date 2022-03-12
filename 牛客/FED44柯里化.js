/**
 * 描述
已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数
示例1
输入：
var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);
输出：
6
 */

function curryIt(fn) {
    // 声明一个数组来累计参数，等到参数个数符合fn函数的参数个数的时候直接调fn函数结束这次函数调用
    let args = [];
    return function curried(arg) {
        // 将每次的参数积攒进来
        args.push(arg);
        // 如果积攒的参数个数符合fn的参数个数
        if (args.length >= fn.length) {
            // 在这里直接return 结束这次函数执行
            return fn.apply(this, args)
        }
        else {
            return function(args2) {
                // 没攒够的话 继续调用自身
                return curried.call(this, args2);
            }
        }
    }
}


var fn = function (a, b, c) {return a + b + c}; 
console.log(curryIt2(fn)(1)(2)(3));