/**
 * 226. 翻转二叉树
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  const stack = [root]
  while(root && stack.length) {
      let node = stack.pop()
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
      let temp = node.left
      node.left = node.right
      node.right = temp
      // [node.left, node.right] = [node.right, node.left]
  }
  return root
};