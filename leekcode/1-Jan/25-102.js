/**
 *  binary-tree-level-order-traversal
 *  Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const queue = [root]
  const ans = []
  while(queue.length) {
      let size = queue.length
      let stack = []
      while(size > 0) {
          const node = queue.shift()
          stack.push(node.val)
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
          size--
      }
      ans.push(stack)
  }
  return ans
};