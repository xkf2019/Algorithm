/**
 * 144. 二叉树的前序遍历
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
// 递归
var preorderTraversal = function(root) {
  const ans = []
  preOrder(root, ans)
  return ans
};
function preOrder(root, ans) {
  if (!root) return null
  ans.push(root.val)
  preOrder(root.left, ans)
  preOrder(root.right, ans)
}

// 迭代
var preorderTraversal = function(root) {
  const ans = []
  const stack = []
  while(root || stack.length) {
      while(root) {
          stack.push(root)
          ans.push(root.val)
          root = root.left
      }
      root = stack.pop()
      root = root.right || null
  }
  return ans
};