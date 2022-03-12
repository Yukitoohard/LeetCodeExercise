/*
1 获取构造函数
2 创建一个新对象
3 将函数的作用域赋给新对象（这里实际上就是生产了一个新的上下文）
4 执行函数中的代码（为新对象添加属性、方法）
5 返回值，无返回值或者返回一个非对象值时，则将创建的新对象返回，否则会将返回值作为新对象返回（也就是说一定会返回一个对象回来）
*/
// 未解决
function myNew() {
    let myConstructor = Array.prototype.shift.call(arguments); 
    let obj = {};
    obj.__proto__ = myConstructor.prototype;
    var res = myConstructor.apply(obj, arguments);
    return typeof res === 'object' ? res : obj;
}

function Man(name, age) {
    this.name = name;
    this.age = age;
}

var tom = new Man('tom', 20);
var mike = myNew('mike', 30);
console.log(tom instanceof Man, mike instanceof Man);