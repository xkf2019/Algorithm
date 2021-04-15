/**
 * 331. 验证二叉树的前序序列化
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  const arr = preorder.split(',')
  let dif = 1
  for(let v of arr) {
      dif--
      if (dif < 0) return false
      if (v != '#') {
          dif+=2
      }  
  }
  return dif === 0
};

var isValidSerialization = function(preorder) {
  const arr = preorder.split(',')
  let stack = []
  for(let v of arr) {
      stack.push(v)
      while (stack.length > 2 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
          stack.pop()
          stack.pop()
          stack.pop()
          stack.push('#')
      }
  }
  return stack.length === 1 && stack.pop() === '#'
};