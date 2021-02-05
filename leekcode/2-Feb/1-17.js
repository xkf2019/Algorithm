/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let ans = []
  if (!digits) return ans
  const map = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
  }
  
  function helper(p, q, i) {
      if (!q) {
          ans.push(p)
          return
      } 
      for (d1 of q) {
          helper(p + d1, map[digits[i + 1]], i + 1)
      }
  }
  helper('', map[digits[0]], 0)
  return ans
};

var letterCombinations = function(digits) {
  let ans = []
  if (!digits) return ans
  const map = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz',
  }
  const len = digits.length
  for (let d of map[digits[0]]) {
      ans.push(d)
  }
  for (let i = 1; i < len; i++) {
      let size = ans.length
      while(size > 0) {
          const d1 = ans.shift()
          for (let d2 of map[digits[i]]) {
              ans.push(d1 + d2)
          }
          size--
      }
  }
  return ans
};