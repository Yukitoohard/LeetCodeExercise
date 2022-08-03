/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummyHead = new ListNode(0, head);
    let cur = dummyHead;

    while (cur.next && cur.next.next) {
        // 要在循环里定义tmp和tmp1，每次交换都需要重新定义临时变量
        let tmp = cur.next;  
        let tmp1 = cur.next.next;  
        cur.next = cur.next.next;  // 虚拟头结点指向第二个节点
        cur.next.next = tmp;  // 第二个节点指向第一个节点，前面两个节点交换完毕
        cur.next.next.next = tmp1;  // 第一个节点指向第三个节点

        cur = cur.next.next;  // cur移动两位，准备下一轮交换
    }
    return dummyHead.next;
};
// @lc code=end

