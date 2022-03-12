/**
 * 描述
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数
示例1
输入：
无
输出：
无
 */

function partialUsingArguments(fn) {
    let arr1 = Array.prototype.slice.call(arguments, 1);
    // console.log(arr1);
    return result = function() {
        let arr2 = Array.prototype.slice.call(arguments, 0);
        // console.log(arr2);
        return fn.apply(this, arr1.concat(arr2));
    }
}

function testFn(name, age) {
    console.log("Hello, " + age + "岁的" + name);
}

testFn("Yuki", 18);
console.log(partialUsingArguments(testFn));