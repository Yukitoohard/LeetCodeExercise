/**
 * 描述
删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4]
输出：
[2, 3, 4]
 */

function curtail(arr) {
    let res = arr.slice(0);
    res.shift();
    return arr;

    return arr.filter((v, i) => { return i !== 0} )
}

testArr = [1, 2, 3, 4];
console.log(curtail(testArr));