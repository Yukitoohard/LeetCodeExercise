/*
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。  

示例 1：
输入：[3,4,5,1,2]
输出：1

示例 2：
输入：[2,2,2,0,1]
输出：0
*/

/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    // return Math.min(...numbers);
    // 搜索区间是左闭右闭
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        let m = Math.floor((i + j) / 2);
        // [3,4,5,1,2] m位置值为5 所以应该在右半部分搜索
        if (numbers[m] > numbers[j]) {
            i = m + 1;
        }
        // [6,7,3,4,5] m位置值为3 所以应该在左半部分搜索
        else if (numbers[m] < numbers[j]) {
            j = m;
        }
        // j和m相等的情况，因为我们要找旋转数组的最小元素，也就是寻找左边界
        else {
            j--;
        }
    }
    return numbers[i];
};