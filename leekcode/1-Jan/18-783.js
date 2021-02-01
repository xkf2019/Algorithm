/**
 * minimum-distance-between-bst-nodes
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
var minDiffInBST = function(root) {
  let ans = Infinity
  let prev = null
  function helper (node) {
      if (node === null) return
      helper(node.left)
      if (prev) {
          ans = Math.min(ans, node.val - prev.val)
      }
      prev = node
      helper(node.right)
  }
  helper(root)
  return ans
};