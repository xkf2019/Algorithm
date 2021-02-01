/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  if (S[0] !== '(') return ''
  var count = 0
  var i = 0
  var begin = 0
  var str = ''
  while (i < S.length) {
    if (S[i] === '(') count++
    if (S[i] === ')') count--
    if (count === 0) {
      str += S.substring(begin + 1, i)
      begin = i + 1
    }
    i++
  }
  return str
};


var removeOuterParentheses = function (S) {
  let count = 0
  let arr = []
  for (let p of S) {
    if ((p === '(' && count++ > 0) || (p === ')' && count-- > 1))
      arr.push(p)
  }
  return arr.join('')
};

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = []
  let s = ''
  for (let p of S) {
    if ((p === '(' && stack.push(1) > 1) || (p === ')' && stack.pop() && stack.length > 0)) {
      s += p
    }
  }
  return s
};