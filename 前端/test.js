// console.log(a);
// let a = 1;
// console.log(window.a);

// console.log(typeof ({}).toString());  // "[object Object]"

// var x = {
//     toString() {
//         return "X";
//     }
// }

// console.log(x.toString());
// console.log(typeof Symbol.toStringTag);
// console.log(Object.prototype.toString.apply(x));

// let arr = [1, 2, 3, 6, 5, 4];
// let max = Math.max.apply(null, arr);
// let newMax = Math.max(...arr);
// console.log(max);
// console.log(newMax);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2);
// console.log(arr1);

// let arr3 = arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2]; 
// console.log(arr3);

// var name = "The Window";
// var object = {
//     name: "My Object",

//     getNameFunc: function () {
//         var that = this;
//         return function () {
//             return that.name;
//         };
//     }

// };
// console.log(object.getNameFunc()());

// function n() {
//     var a = 2;
//     function foo() {
//         console.log(a);;
//     }
//     function bar() {
//         var a = 3;
//         foo();
//     }
//     return a;
// }
// console.log(n());
// console.log(n.prototype);

// 构造函数继承，只能继承父类构造函数的属性和方法，无法继承父类原型的属性和方法
// function Parent() {
//     this.name = "parent1";
// }
// Parent.prototype.getName = function() {
//     return this.name;
// }
// function Child() {
//     Parent.call(this);
//     this.type = 'child';
// }

// let child = new Child();
// console.log(child);
// console.log(child.getName);  // undefined


// let a = "Hello there";
// function first() {
//     console.log("Inside first");
//     second();
//     console.log("Again inside first");
// }

// function second() {
//     console.log("Inside second");
// }

// first();
// console.log("Inside global Exe Context");
// Inside first
// Inside second
// Again inside first
// Inside global Exe Context

// let str = new String('xxx');
// console.log(str instanceof String);   // false

/*
function Test(name) {
    this.name = name;
    console.log(this); // Test { name: 'xxx' }
    return {age: 24};
}

const t = new Test('xxx');
console.log(t.name);  // undefined
console.log(t); // { age: 24 }
*/

// let quickArr = [-2,-1,0,1,2];
// let mid = Math.floor(quickArr.length/2);
// let midNumber = quickArr.splice(mid, 1)[0];  // 因为splice出来是一个数组
// console.log(midNumber, quickArr);

/*
function test (a, b) {
    a=1;
    b.c = '2';
}
var ta = 2;
var tb = {c : '1'};
test(ta, tb)
console.log(ta, tb); // 2 { c: '2' } 引用数据类型保存实参地址，实参值随函数内部修改而改变

function testa (number) {
    number = 2;
}
let a = 1;
testa(a);
console.log(a); // 1 
*/

console.log(1+2 === 3); // true


console.log(parseInt("10.2abc"));  // 10
console.log(parseFloat("10.2abc"));  // 10.2
console.log(parseInt(+ "10.2abc"));  // NaN

var a = 1;
var b = 2;
// 匿名函数
(function() {
    var b = 3;  // 声明了一个局部变量
    a += b;  // a还是全局变量
})();
// ???
console.log(a);; // 4
console.log(b);; // 2
