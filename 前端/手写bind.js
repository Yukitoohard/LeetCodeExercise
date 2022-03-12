// 未解决

Function.prototype.myBind = function (context) {
    let _me = this;
    return function () {
        return _me.apply(context);
    }
}

var a = 1, b = 2;
var obj = {a: 10, b: 20};
function test(k1, k2) {
    console.log(this[k1], this[k2]);
}
var fn = test.myBind(obj);
fn('a', 'b');