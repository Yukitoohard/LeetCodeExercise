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
    name: "My Object",

    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name;
        };
    }

};

console.log(object.getNameFunc()());

function n() {
    var a = 2;
    function foo() {
        console.log(a);;
    }
    function bar() {
        var a = 3;
        foo();
    }
    return a;
}
console.log(n());

console.log(n.prototype);

function Parent() {
    this.name = "parent1";
}

Parent.prototype.getName = function() {
    return this.name;
}

function Child() {
    Parent.call(this);
    this.type = 'child';
}

let child = new Child();
console.log(child);
console.log(child.getName);

let a = "Hello there";
function first() {
    console.log("Inside first");
    second();
    console.log("Again inside first");
}

function second() {
    console.log("Inside second");
}

first();
console.log("Inside global Exe Context");

let str = 'xxx';
console.log(str instanceof String);

function Test(name) {
    this.name = name;
    console.log(this);
    return {age: 24};
}

const t = new Test('xxx');
console.log(t.name);
console.log(t);

let inputs = ["2", "4 2 3 4 5", "5 1 5 4 2 1"];
// let nums = [5, 1, 3, 3, 4, 5];

let len = parseInt(inputs[0]);
// console.log(typeof len);
for (let i=1; i<=len; i++) {
    let sum = 0;
    let nums = inputs[i].split(' ');
    // console.log(nums);
    let n = nums[0];
    for (let j = 1; j <= n; j++) {
        // console.log(nums[j]);
        sum += parseInt(nums[j]);
    }
    console.log(sum);
}

let quickArr = [-2,-1,0,1,2];
let mid = Math.floor(quickArr.length/2);
let midNumber = quickArr.splice(mid, 1)[0];
console.log(midNumber, quickArr);