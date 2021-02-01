/**
 * binary-tree-paths
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root)return []
  const ans = []
  function helper(root, path) {
      path  = path + root.val.toString()
      if (!root.left && !root.right) {
          ans.push(path)
      }
      path = path + '->'
      if (root.left) {
          helper(root.left, path)
      }
      if (root.right) {
          helper(root.right, path)
      }
  }
  helper(root, '')
  return ans
};

var binaryTreePaths = function(root) {
  if (!root)return []
  const ans = []
  const queue = [root]
  let path_route = [root.val.toString()]
  while (queue.length) {
      let node = queue.shift()
      let path = path_route.shift()
      if (!node.left && !node.right) {
          ans.push(path)
      }
      path += '->'
      if (node.left) {
          queue.push(node.left)
          path_route.push(path + node.left.val.toString())
      }
      if (node.right) {
          queue.push(node.right)
          path_route.push(path + node.right.val.toString())
      }
  }
  return ans
};