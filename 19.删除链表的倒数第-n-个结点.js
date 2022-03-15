/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 方法一：两次遍历
    /*
    const getLength = (head) => {
        let len = 0;
        // 遍历获取链表长度
        while (head) {
            len++;
            head = head.next;
        }
        return len;
    }
    // 创建哑节点指向链表头节点
    let dummy = new ListNode(0, head);
    let len = getLength(head);
    let cur = dummy;
    for (let i=1; i<len-n+1; i++) {
        // 遍历获取要删除的节点
        cur = cur.next;
    }
    // 把当前节点的指针指向删除节点的后继节点
    cur.next = cur.next.next;
    return dummy.next;
    */

    // 方法二：利用栈先进后出的特质
    /*
    let stack = [];
    let dummy = new ListNode(0, head);
    let tmp = dummy;
    while (tmp) {
        stack.push(tmp);
        tmp = tmp.next;
    }
    while (n) {
        stack.pop();
        n--;
    }
    let prev = stack.pop();
    prev.next = prev.next.next;
    return dummy.next;
    */

    // 方法三：双指针
    let dummy = new ListNode(0, head);
    // 用两个指针同时对链表进行遍历
    let first = head;
    let second = dummy;

    // first指针先往前遍历，比second超前n个节点，first和second之间相隔n-1个节点
    for (let i=0; i<n; i++) {
        first = first.next;
    }

    // 当first遍历到链表末尾，即first为空指针时，second恰好指向倒数第n个节点
    // second的下一个节点则是要删除的节点
    while (first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
};
// @lc code=end

