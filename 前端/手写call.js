/*
思路
根据call的规则设置上下文对象,也就是this的指向。
通过设置context的属性,将函数的this指向隐式绑定到context上
通过隐式绑定执行函数并传递参数。
删除临时属性，返回函数执行结果
*/

Function.prototype.myCall = function (context) {
    if (context === null || context === undefined) {
        // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window;
    }
    else {
        context = Object(context); // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    // context = context ? Object(context) : window 
    context.testFn = this; // 函数的this指向隐式绑定到context上
    let arr = [...arguments].slice(1); // 截取实参
    let res = context.testFn(...arr); // 通过隐式绑定执行函数并传递参数
    delete context.testFn; // 删除上下文对象的属性
    return res; // 返回函数执行结果
}

var a = 1, b = 2;
var obj = {
    a: 10,
    b: 20
};
function test(k1, k2) {
    console.log(this[k1], this[k2]);
}
test(a, b);
test.myCall(obj, 'a', 'b')
