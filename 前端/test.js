// console.log(a);
// let a = 1;
// console.log(window.a);

// console.log(typeof ({}).toString());  // "[object Object]"

var x = {
    toString() {
        return "X";
    }
}

console.log(x.toString());
console.log(typeof Symbol.toStringTag);
console.log(Object.prototype.toString.apply(x));

let arr = [1, 2, 3, 6, 5, 4];
let max = Math.max.apply(null, arr);
let newMax = Math.max(...arr);
console.log(max);
console.log(newMax);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Array.prototype.push.apply(arr1, arr2);
console.log(arr1);

// let arr3 = arr1.concat(arr2);
let arr3 = [...arr1, ...arr2]; 
console.log(arr3);

var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};

　　console.log(object.getNameFunc()());
