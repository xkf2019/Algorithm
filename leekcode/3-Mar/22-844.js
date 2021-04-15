/**
 * 844. 比较含退格的字符串
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s1 = [], s2 = []
  for(let v of S) {
      if (v === '#') {
          s1.pop()
      } else {
          s1.push(v)
      }
  }
  for(let v of T) {
      if (v === '#') {
          s2.pop()
      } else {
          s2.push(v)
      }
  }
  return s1.join('') === s2.join('')
};