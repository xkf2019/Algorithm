/**
 * 1249. 移除无效的括号
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let t = ''
  for (let i = 0, count = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] !== ')') {
          count += (s[i] === '(')
          t += s[i]
      } else {
          if (count === 0) continue
          count--
          t += ')'
      }
  }
  let ans = ''
  for (let i = t.length - 1, count = 0; i >=0; i--) {
      if (t[i] === ')' || t[i] !== '(') {
          count += (t[i] === ')')
          ans = t[i] + ans
      } else {
          if (count === 0) continue
          count--
          ans = '(' + ans
      }
  }
  return ans
};