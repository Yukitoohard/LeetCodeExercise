/*
请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

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
  [20,9],
  [15,7]
]
*/

const levelOrder = (root) => {
    if (!root) return [];
    let res = [], queue = [root], flag = 1;

    while (queue.length) {
        let tmp = [], len = queue.length;
        for (let i=0; i<len; i++) {
            let node = queue.shift();
            flag % 2 === 0 ? tmp.unshift(node.val) : tmp.push(node.val);

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        flag++;
        res.push(tmp);
    }
    return res;
}