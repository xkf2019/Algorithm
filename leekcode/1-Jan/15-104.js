/**
 * maximum-depth-of-binary-tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归
var maxDepth = function(root) {
 return root === null ? 0 : 1 + Math.max(maxDepth(root.left),maxDepth(root.right))
};

var maxDepth = function(root) {
  if (root === null) return 0
  const queue = [root]
  let count = 0
  while(queue.length) {
      let len = queue.length
      while(len > 0) {
          const node = queue.shift()
          if (node.left) {
              queue.push(node.left)
          }
          if (node.right) {
              queue.push(node.right)
          }
          len--
      }
      count++
  }
 return count
};