/**
 * 描述
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同
示例1
输入：
[1, 2, 3], function (x) { 
	return x * x; 
}
输出：
4
 */

// 未理解
function makeClosures(arr, fn) {
    return arr.map(el => {
        // return function () {
        //     return fn(el);
        // }
        return fn.bind(this, el);
    });
}

let testArr = [1, 2, 3];
let testFn = function (x) { 
	return x * x; 
}

console.log(makeClosures(testArr, testFn));
