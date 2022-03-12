// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

//  

// 示例 1：

// 输入：head = [1,3,2]
// 输出：[2,3,1]
//  

// 限制：

// 0 <= 链表长度 <= 10000

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    // 方法一：遍历链表，将每个元素从数组头部插入，实现倒序输出。JavaScript这样的有不定长数组的语言，只扫描一趟即可
    // unshift()往数组头部添加元素
    /* let nums = [];
    let node = head;
    while (node != null) {
        nums.unshift(node.val);
        node = node.next;
    }
    return nums;
    */

    // 方法二：递归
    // 递归本身于栈后进先出的原理一致，通过递归从最后一个结果开始保存到数组中，实现倒序打印。这种方法需要注意是否会因为链表过长导致栈溢出
    let nums = [];
    const visitor = (head) => {
        if (head != null) {
            visitor(head.next);
            nums.push(head.val);
        }
    }
    visitor(head);
    return nums;
};