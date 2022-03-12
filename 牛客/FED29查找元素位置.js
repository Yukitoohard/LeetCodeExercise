/**
 * 描述
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
示例1
输入：
['a','b','c','d','e','f','a','b','c'] 'a'
输出：
[0, 6]
 */

function findAllOccurrences(arr, target) {
    let res = [];
    // arr.forEach((el, i) => {
    //     if (el === target) {
    //         res.push(i);
    //     }
    // })
    // return res;

    // let idx = arr.lastIndexOf(target);
    // while (idx != -1) {
    //     res.unshift(idx);
    //     idx = (idx > 0 ? arr.lastIndexOf(target, idx - 1) : -1);
    // }

    let idx = arr.indexOf(target);
    while (idx != -1) {
        res.push(idx);
        idx = arr.indexOf(target, idx + 1);
    }

    return res;
}

let testArr = ['a','b','c','d','e','f','a','b','c'], testItem = 'a';
console.log(findAllOccurrences(testArr, testItem));
