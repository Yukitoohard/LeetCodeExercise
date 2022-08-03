/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // 如果有环
        // 从头结点出发一个指针，从相遇节点也出发一个指针，这两个指针每次只走一个节点，那么当这两个指针相遇的时候就是环形入口的节点
        // 也就是在相遇节点处，定义一个指针index1，在头结点处定一个指针index2。
        // 让index1和index2同时移动，每次移动一个节点，那么他们相遇的地方就是环形入口的节点。
        if (slow == fast) {
            let index1 = fast;
            let index2 = head;
            while (index1 !== index2) {
                index1 = index1.next;
                index2 = index2.next;
            }
            return index2;
        }
    }
    return null;
};
// @lc code=end

