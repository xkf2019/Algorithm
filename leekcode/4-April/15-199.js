/**
 * 199. 二叉树的右视图
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return []
  const ans = []
  const queue = [root]
  while(queue.length) {
      let size = queue.length
      ans.push(queue[size - 1].val)
      while(size--) {
          const node = queue.shift()
          if(node.left) queue.push(node.left)
          if(node.right) queue.push(node.right)
      }
  }
  return ans
};