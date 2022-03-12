/**
 * 
 描述
给定一个构造函数 constructor，请完成 alterObjects 方法，将 constructor 的所有实例的 greeting 属性指向给定的 greeting 变量。
示例1
输入：
var C = function(name) {this.name = name; return this;}; 
var obj1 = new C('Rebecca'); 
alterObjects(C, 'What\'s up'); obj1.greeting;
输出：
What's up
 */

// 所有实例的某个属性都改变只需要改变这个构造函数的原型即可
function alterObjects(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
}

