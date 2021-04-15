/**
 * 227. 基本计算器 II
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s+/g, '')
  let stack = []
  let num = 0
  let pre = '+'
  for(let i = 0; i < s.length; i++) {
      if (!isNaN(s[i])) {
          num = num * 10 + Number(s[i])
      } 
      if (isNaN(s[i]) || i === s.length - 1) {
          switch(pre) {
              case '+': 
                  stack.push(num)
                  break
              case '-': 
                  stack.push(-num)
                  break
              case '*': 
                  stack.push(stack.pop() * num)
                  break
              case '/': 
                  stack.push(parseInt(stack.pop() / num))
                  break
          }
          pre = s[i]
          num = 0
      }
  }
  return stack.reduce((sum, v) => sum + v)
};