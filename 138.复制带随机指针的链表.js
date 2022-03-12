/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if(!head) {
        return head;
    }
    // 使用哈希表，空间复杂度为O(n)
    let cur = head;
    let map = new Map();
    // let copyHead = new Node(0);
    // pre = copyHead;
    
    // 复制节点，将新节点放入map中
    while (cur) {
        // let node = new Node(cur.val);
        // pre.next = node;
        // cur = cur.next;
        // pre = node;
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    cur = head;
    // 对map中的新节点进行遍历操作
    while(cur) {
        map.get(cur).next =  map.get(cur.next) === void 0 ? null : map.get(cur.next);
        map.get(cur).random = map.get(cur.random);
        cur = cur.next;
    }

    return map.get(head);

};