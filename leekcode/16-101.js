/**
 * symmetric-tree  对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return helper(root, root)
};
function helper(p, q) {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false
  return helper(p.left, q.right) && helper(p.right, q.left)
}

var isSymmetric = function (root) {
  let queue = []
  queue.push(root, root)
  while (queue.length) {
    let p = queue.shift()
    let q = queue.shift()

    if (!q && !p) continue
    if (!q || !p || p.val !== q.val) return false
    queue.push(p.left)
    queue.push(q.right)
    queue.push(p.right)
    queue.push(q.left)

  }
  return true
};