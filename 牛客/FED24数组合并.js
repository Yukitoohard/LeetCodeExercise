/**
 * 描述
合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4], ['a', 'b', 'c', 1]
输出：
[1, 2, 3, 4, 'a', 'b', 'c', 1]
 * 
 */

function concat(arr1, arr2) {
    return arr1.concat(arr2);
    
    let res = arr1.slice(0);
    [].push.apply(res, arr2);
    return res;
}

let a1 = [1, 2, 3, 4];
let a2 = ['a', 'b', 'c', 1];
console.log(concat(a1, a2));
console.log(a1);
console.log(a2);