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
        let tmp1 = cur.next;
        let tmp2 = cur.next.next.next;
        cur.next = cur.next.next;
        cur.next.next = tmp1;
        cur.next.next.next = tmp2;

        cur = cur.next.next;
    }

    return dummyHead.next;
};
// @lc code=end

