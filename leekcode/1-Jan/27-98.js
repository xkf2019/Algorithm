/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let isBST = true
  let prev = null
  function inOrder(node) {
      if (!node) return
      isBST && inOrder(node.left)
      if (prev) {
          if (node.val <= prev.val) {
              isBST = false
          }
      } 
      prev = node
      isBST && inOrder(node.right)
  }
  inOrder(root)
  return isBST
};

var isValidBST = function(root) {
    if (!root) return true
    let prev = null
    const stack = [root]
    while(root || stack.length) {
        while (root && root.left) {
            stack.push(root.left)
            root = root.left
        }
        root = stack.pop()
        if (prev) {
            if (root.val <= prev.val) {
                return false
            }
        }
        prev = root
        if (root.right) {
            stack.push(root.right)
        }
        root = root.right
    }
    return true
};
