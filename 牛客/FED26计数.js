/**
 * 描述
统计数组 arr 中值等于 item 的元素出现的次数
示例1
输入：
[1, 2, 4, 4, 3, 4, 3], 4
输出：
3
 */

function count(arr, item) {
    // return resArr = arr.filter((i) => {
    //     return i === item;
    // }).length;  

    let resArr = arr.filter((i) => {
        console.log(i);
            return i === item;
        })
    return resArr.length;
}

let testArr = [1, 2, 4, 4, 3, 4, 3];
let testItem = 3;
console.log(count(testArr, testItem));