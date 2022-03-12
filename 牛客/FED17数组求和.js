/**
 * 描述
计算并返回给定数组 arr 中所有元素的总和
输入描述：
数组中的元素均为 Number 类型
示例1
输入：
[ 1, 2, 3, 4 ]
输出：
10
 */

function sum(arr) {
    /*let res = 0;
    for (let i=0; i<arr.length; i++) {
        res += arr[i];
    }
    return res
    */
    return arr.reduce((a,b) => a+b, 0)
}