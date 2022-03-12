/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0; //if(l1) n1 = l1.val else n1 = 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry; // 和为n1+n2+carry进位
        if (!head) {
            // 头节点为null，新建链表创建新节点，把sum赋值给头尾节点
            head = tail = new ListNode(sum % 10);
        }
        else {
            // 第一轮循环不进
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10); // 向下取整
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0) {
        // 最后如果有进位需要新建节点，value为carry进位值
        tail.next = new ListNode(carry);
    }
    return head;
};
// @lc code=end

