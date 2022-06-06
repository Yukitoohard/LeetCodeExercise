/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
// 方法二：递归
 var reverse = function (cur, pre) {
    if (!cur) return pre;
    let tmp = cur.next;
    cur.next = pre;
    pre = cur;

    return reverse(tmp, cur);
}

var reverseList = function(head) {
    // 方法一：双指针
    /*
    if (!head) return null;
    let cur = head;
    let pre = null;
    // 保存cur的下一个节点
    let tmp;

    while (cur) {
        tmp = cur.next
        // 翻转操作
        cur.next = pre;
        // 更新pre和cur指针
        pre = cur;
        cur = tmp;
    }
    // pre指针指向了新的头节点
    return pre;
    */

    // 方法二 递归
    

    return reverse(head, null);
};
// @lc code=end

