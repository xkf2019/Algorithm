/**
 * 859. 亲密字符串
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
  if (a.length !== b.length) return false
  let map = {}
  let arr = []
  let hasRepeat = false
  for (let i = 0; i < a.length; i++) {
      if (map[a[i]]) {
          hasRepeat = true
      }
      map[a[i]] = (map[a[i]] || 0) + 1
      if (a[i] !== b[i]) {
          arr.push(i)
      }
      if (arr.length > 2) return false
  }
  if (arr.length === 0)
      return hasRepeat
  if (arr.length === 2) {
      return a[arr[0]] === b[arr[1]] && a[arr[1]] === b[arr[0]]
  } 
  return false
};