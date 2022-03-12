/**
找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
1、返回数组，格式为 key: value
2、结果数组不要求顺序

示例1
输入: var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
iterate(new C());
输出：["foo: bar", "baz: bim"]
 * 
 */

function iterate(obj) {
    let arr = [];
    Object.getOwnPropertyNames(obj).forEach(key => {  // 方法getOwnPropertyNames换成keys也行
        arr.push(key + ": " + obj[key])
    })
    return arr;
}

var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
console.log(iterate(new C()));