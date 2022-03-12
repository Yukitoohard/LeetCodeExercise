/**
 * 在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4],  10
输出：
[1, 2, 3, 4, 10]
 */

function append(arr, item) {
    let res = [...arr, item];
    return res;

    return arr.concat(item);

    let res = arr.slice(0); // 对原数组浅拷贝，从0开始
    res.push(item);
    return res;
}

console.log(append([1, 2, 3], 1));