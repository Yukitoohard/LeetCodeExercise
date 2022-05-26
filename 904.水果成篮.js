/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */

// 求满足某个条件（数组值最多就两类的连续数组，例如[1,2,2,1,2]）的最长数组长度
var totalFruit = function(fruits) {
    let left = 0; // 起始指针
    let maxLen = 0; // 窗口的最大长度，其中最多包含两种水果
    let n = 0;  // 前一类水果的结束位置，记录每次遇到第三种水果时，上一种水果的起始位置
    let arr = [fruits[left]];  // 存两种水果的篮子数组

    for (let right = 0; right < fruits.length; right++) {  // 窗口的右指针不断前进
        if (!arr.includes(fruits[right])) {  // 篮子（窗口）中是否包含右指针指向的水果
            if (arr.length <= 1) { // 如果不包含，且数组里只有一种水果（还有个篮子还没用），就放入第二种水果
                arr[1] = fruits[right];  // 将这种水果加入arr数组中
            }
            else { // 如果有两种水果，且遇到了第三种水果，则更新第一种水果的起始位置
                left = n;  // 更新窗口的左边界
                // 更新arr中水果的种类
                arr[0] = fruits[right - 1];  // right-1是上一种水果的品种，品种不用记录起始位置
                arr[1] = fruits[right];  // right是第三种水果的类型编号
            }
        }
        if (fruits[right] != fruits[n]) {  
            // n存的是fruits每次水果发生变化且第一次出现的索引
            // 如果进来了一种新的类型的水果，更新前一种水果的位置
            n = right;
        }
        maxLen = Math.max(maxLen, right - left + 1);  // 更新滑动窗口的最大值
    }
    return maxLen;
};
// @lc code=end

