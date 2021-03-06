/**
 * minimum-depth-of-binary-tree 二叉树的最小深度
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  let lev = 1
  let queue = [root]
  while (queue.length) {
    let size = queue.length
    if (size > 0)
      while (size > 0) {
        const node = queue.shift()
        if (!node.left && !node.right) return lev
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
        size--
      }
    lev++
  }
  return lev
};

var minDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  if (!left) {
      return right + 1
  }
  if (!right) {
      return left + 1
  }
  return Math.min(left, right) + 1
};