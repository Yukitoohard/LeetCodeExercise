/**
 * 描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
示例1
输入：
[1, 2, 3, 4, 2], 2
输出：
[1, 3, 4]
 * 
 */

function remove(arr, item) {
    /* let res = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== item) {
            res.push(arr[i]);
        }
    }
    return res; */
    
    let res = arr.filter(value => {return value !== item});
    return res;
}