/**
 * 76. 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let len = Infinity, start = 0, l = 0, r = 0, valid = 0
  const need = {}, win = {}
  t.split('').forEach(v => need[v] = (need[v] || 0) + 1)
  const size = Object.keys(need).length
  while(r < s.length) {
      const c = s[r]
      r++
      if (need[c]) {
          win[c] = (win[c] || 0) + 1
          if (win[c] === need[c]) valid++
      }
      while (valid === size) {
          if (r - l < len) {
              len = r - l
              start = l
          }
          let d = s[l]
          l++
          if (need[d]) {
              if (need[d] == win[d]) valid-- 
              win[d]--
          }
      }
  }
  return len === Infinity ? '' : s.substr(start, len)
};