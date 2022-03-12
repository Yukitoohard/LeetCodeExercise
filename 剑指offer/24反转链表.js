// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 限制：
// 0 <= 节点个数 <= 5000

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
 var reverseList = function(head) {
    // 方法一：迭代（双指针），在访问各节点时修改next引用指向。画图理解！！！
    // 暂存当前节点 的下一段链表
    // 将 当前节点 指向 前一个元素
    // 带着当前节点，更新 前一个链表
    // 当前节点 指向下一段链表
    // 这个过程，没有创建新的链表，只是把指向变更了一番
    // 时间复杂度O(N)，空间复杂度O(1)
    
    /* let tmp = null;
    let prev = null;
    let curr = head;

    while (curr) {
        tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
    */

    // 方法二：递归
    const recur = (curr, prev) => {
        // 终止条件
        if (curr == null) {
            return prev;
        } 
        res = recur(curr.next, curr); // 递归后继节点
        curr.next = prev; // 修改节点引用指向
        return res; // 返回反转链表的头节点
    }

    return recur(head, null); // 调用递归并返回
    
};