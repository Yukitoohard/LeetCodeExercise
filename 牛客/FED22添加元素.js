/**
 * 描述
在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4], 10
输出：
[10, 1, 2, 3, 4]
 */

function prepend(arr, item) {
    // let res = arr.slice(0);  // 也可 
    let res = [...arr]; // 扩展运算符对于第一层是深拷贝。Array的slice和concat方法不修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组
    arr.unshift(item);

    return res;

    return [item].concat(arr);

    let res = [item];
    [].push.apply(res, arr);
    return res;
}

console.log(prepend([1, 2, 3], 3));