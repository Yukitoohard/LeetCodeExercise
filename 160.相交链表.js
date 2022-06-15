/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 求链表长度
var getLen = function (head) {
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    return len;
}

var getIntersectionNode = function(headA, headB) {
    let curA = headA, curB = headB;
    let lenA = getLen(headA), lenB = getLen(headB);

    // 让curA为最长链表的头，lenA为其长度
    if (lenA < lenB) {
        // 下面交换变量注意加“分号”，两个数组交换变量在同一个作用域下时
        // 如果不加分号，下面两行代码等同于一行代码：[curA, curB] = [lenB, lenA]
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }

    // 获取两个链表的长度差
    let i = lenA - lenB;
    // 让curA和curB在同一起点上（末尾位置对齐，也就是剩下的节点数是一样的）
    while (i-- > 0) {
        curA = curA.next;
    }
    // 遍历curA和curB，遇到相同则返回
    while (curA) {
        if (curA === curB) {
            return curA;
        }
        curA = curA.next;
        curB = curB.next;
    }

    // 没有相同的返回null
    return null;
};
// @lc code=end

