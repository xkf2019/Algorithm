/**
 * 946. 验证栈序列
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  const stack = []
  let i = 0
  let j = 0
  while(i < pushed.length && j < popped.length) {
      while(i < pushed.length && pushed[i] !== popped[j]) {
          stack.push(pushed[i++])
      }
      stack.push(pushed[i++])
      while(j < popped.length && stack.length && popped[j] === stack[stack.length - 1]) {
          stack.pop()
          j++
      }
  }
  return stack.length === 0
};