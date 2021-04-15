/**
 * 662. 二叉树最大宽度
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
var widthOfBinaryTree = function(root) {
  const deque = [{node: root, pos: 0}]
  let ans = 0
  while(deque.length) {
      let size = deque.length, l = deque[0].pos, r = 0
      if (size === 1) deque[0].pos = 0, l = 0
      while(size--) {
          let {node, pos} = deque.shift()
          if (size === 0) r = pos
          if (node.left) deque.push({node: node.left, pos: pos * 2 })
          if (node.right) deque.push({node: node.right, pos: pos * 2 + 1})
      }
      ans = Math.max(ans, r - l + 1)
  }
  return ans
};