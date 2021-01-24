/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * binary-tree-zigzag-level-order-traversal 二叉树的锯齿形层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const queue = [root]
  const ans = []
  let isOdd = true
  while(queue.length) {
      let size = queue.length
      let deque = []
      while(size > 0) {
          let node = queue.shift()
          isOdd ? deque.push(node.val) : deque.unshift(node.val)
          if (node.left) {
              queue.push(node.left)
          }
          if (node.right) {
              queue.push(node.right)
          }
          size--
      }
      ans.push(deque)
      isOdd = !isOdd
  }
  return ans
};