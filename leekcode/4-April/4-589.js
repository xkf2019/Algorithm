/**
 * 589. N 叉树的前序遍历
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const stack = []
  const ans = []
  while(root || stack.length) {
      if (root) {
          ans.push(root.val)
          for (let i = root.children.length - 1; i >= 0; i--) {
              stack.push(root.children[i])
          }
      }
      root = stack.pop()
  }
  return ans
};