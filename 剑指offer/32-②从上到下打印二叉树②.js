/*
从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。

例如:
给定二叉树: [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：
[
  [3],
  [9,20],
  [15,7]
]

提示：
节点总数 <= 1000
*/

const levelOrder = (root) => {
    if (!root) return [];
    let res = [], queue = [root];

    while (queue.length) {
        let tmp = [], len = queue.length;
        
        for (let i=0; i<len; i++){
            let node = queue.shift();
            tmp.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(tmp);
    }
    return res;
}