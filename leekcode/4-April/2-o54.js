/**
 * 剑指 Offer 54. 二叉搜索树的第k大节点
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let ans
  function help(root) {
      if (!root) return
      if (k > 0) {
          help(root.right)
          k--
          if (k === 0 && !ans) {
              ans = root.val
          }
          help(root.left)
      }
      
  }
  help(root)
  return ans
};

