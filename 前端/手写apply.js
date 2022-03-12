// 与手写call类似
Function.prototype.myApply = function (context) {
    context = context ? Object(context) : window;
    context.testFn = this;
    let arr = [...arguments][1];
    if (!arr) {
        return context.testFn();
    }
    let res = context.testFn(...arr);
    delete context.testFn;
    return res;
}

var a = 1, b = 2;
var obj = {a: 10, b: 20};
function test(k1, k2) {
    console.log(this[k1], this[k2]);
}

test(a, b);
test.myApply(obj, ['a', 'b']);