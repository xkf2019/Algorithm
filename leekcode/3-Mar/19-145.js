/**
 * 145. 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  if (!root) return
  const ans = []
  postOrder(root, ans)
  return ans
};
function postOrder(root, ans) {
  if (!root) return
  postOrder(root.left, ans)
  postOrder(root.right, ans)
  ans.push(root.val)
}

// 迭代
var postorderTraversal = function(root) {
  if (!root) return []
  const stack = []
  const ans = []
  let pre = null
  while(stack.length || root) {
      while(root) {
          stack.push(root)
          root = root.left
      }
      root = stack.pop()
      if (!root.right || root.right === pre) {
          pre = root
          ans.push(root.val)
          root = null
      } else {
          stack.push(root)
          root = root.right
      }
  }
  return ans
};
