/**
 * 描述
在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4], 'z', 2
输出：
[1, 2, 'z', 3, 4]
 */

function insert(arr, item, index) {
    let res = arr.slice(0);
    res.splice(index, 0, 'z');
    return res;
}