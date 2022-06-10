/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class LinkNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// 单链表存储头尾节点和节点数量
var MyLinkedList = function() {
    this._size = 0;
    this._tail = null;
    this._head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
    if (index < 0 || index >= this._size) return null;
    // 创建虚拟头节点
    let cur = new LinkNode(0, this._head);
    // 0 -> head
    while (index-- >= 0) {
        cur = cur.next;
    }
    return cur;
}

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this._size) return -1;
    return this.getNode(index).val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new LinkNode(val, this._head);
    this._head = node;
    this._size++;
    // 如果链表为空，则该节点既是头节点也是尾结点
    if (!this._tail) {
        this._tail = node;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new LinkNode(val, null);
    this._size++;
    if (this._tail) {
        // 链表非空,把新节点插入链表的尾部
        this._tail.next = node;
        // 尾指针指向最后一个节点
        this._tail = node;
        return;
    }
    // 链表为空
    this._tail = node;
    this._head = node;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this._size) return;
    if (index <= 0) {
        // 插入链表头部
        this.addAtHead(val);
        return;
    }
    if (index == this._size) {
        // 插入链表尾部
        this.addAtTail(val);
        return;
    }
    // 获取目标节点的上一个节点
    const node = this.getNode(index - 1);
    node.next = new LinkNode(val, node.next);
    this._size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index <0 || index > this._size - 1) return;
    if (index === 0) {
        // 处理头节点
        this._head = this._head.next;
        // 如果删除的这个节点同时是尾结点，则要处理尾结点
        if (index === this._size - 1) {
            this._tail = this._head;
        }
        this._size--;
        return;
    }
    const node = this.getNode(index - 1);
    node.next = node.next.next;
    // 处理尾结点，如果删除的正好是尾结点，会导致this._tail指针仍然指向被删除的节点
    if (index === this._size - 1) {
        this._tail = node;
    }
    this._size--
    
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

