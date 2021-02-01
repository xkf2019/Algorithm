/**
 * range-sum-of-bst
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  let ans = 0
  if (!root) return 0
  const queue = [root]
  while(queue.length) {
      const node = queue.shift()
      if (node.val >= low && node.val <= high) {
          ans += node.val
      }
      if (node.val > low && node.left) {
          queue.push(node.left)
      }
      if (node.val < high && node.right) {
          queue.push(node.right)
      }
  }
  return ans
};