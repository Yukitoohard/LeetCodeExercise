/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 简短代码
/*
 const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, res = nums.length;

    while (left <= right) {
        let mid = left + ((right - left) >> 1);
        if (nums[mid] > target || (target <= nums[mid] && lower)) {
            right = mid - 1;
            res = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return res;
}

var searchRange = function(nums, target) {
    let res = [-1, -1];
    const leftIdx = binarySearch(nums, target, true);
    const rightIdx = binarySearch(nums, target, false) - 1;
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        res = [leftIdx, rightIdx]
    }
    return res;
};
*/

// target在数组里的左右边界有三种情况
// 情况一：target在数组范围的右边或者左边，例如数组[3, 4, 5]，target为2或者数组[3, 4, 5]，target为6，此时应该返回[-1, -1];
// 情况二：target在数组范围中，且数组中不存在target，例如数组[3,6,7], target为5，此时应该返回[-1, -1]
// 情况三：target在数组范围中，且数组中存在target，例如数组[3,6,7], target为6，此时应该返回[1, 1]

var searchRange = function(nums, target) {
    // 二分查找，寻找target的右边界（不包括target）
    // 如果rightBorder为没有被赋值（即target在数组范围的左边，例如数组[3, 3]，target为2），为了处理情况一
    const getRightBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let rightBorder = -2; // 记录一下rightBorder没有被赋值的情况
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (nums[mid] > target) {
                right = mid - 1;
            }
            else {
                // 当nums[middle] == target的时候，更新left，这样才能得到target的右边界
                left = mid + 1;
                rightBorder = left;
            }
        }
        return rightBorder;
    }

    // 二分查找，寻找target的左边界leftBorder（不包括target）
    // 如果leftBorder没有被赋值（即target在数组范围的右边，例如数组[3,3],target为4），为了处理情况一
    const getLeftBorder = (nums, target) => {
        let left = 0, right = nums.length - 1;
        let leftBorder = -2; // 记录一下leftBorder没有被赋值的情况
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (nums[mid] >= target) { //为什么>=？
                // 寻找左边界，就要在nums[middle] == target的时候更新right，也就是找到左边搜索数组的最右边 
                right = mid - 1;
                leftBorder = right;
            }
            else {
                left = mid + 1;
            }
        }
        return leftBorder;
    }
    let leftBorder = getLeftBorder(nums, target);
    let rightBorder = getRightBorder(nums, target);

    // 情况一
    if (leftBorder == -2 || rightBorder == -2) return [-1, -1];
    // 情况三
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];
    // 情况二
    return [-1, -1];
}
// @lc code=end

