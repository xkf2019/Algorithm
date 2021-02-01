/**
 * lowest-common-ancestor-of-a-binary-search-tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const map = new Map()
  const queue = [root]
  map.set(root, null)
  while(queue.length) {
      const node = queue.shift()
      if (node.left) {
          queue.push(node.left)
          map.set(node.left, node)
      }
      if (node.right) {
          queue.push(node.right)
          map.set(node.right, node)
      }
  }
  let set = new Set()
  while (p) {
      set.add(p)
      p = map.get(p)
  }
  while(!set.has(q)) {
      q = map.get(q)
  }
  return q
};

var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
      return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && q.val > root.val) {
     return lowestCommonAncestor(root.right, p, q)
  }
  return root
};

var lowestCommonAncestor = function(root, p, q) {
  const queue = [root]
  while(queue.length) {
      const node = queue.shift()
      if (node.val < p.val && node.val < q.val) {
          queue.push(node.right)
          continue
      }
      if (node.val > p.val && node.val > q.val) {
          queue.push(node.left)
          continue
      }
      return node
  }
};
