/**
 * 5. 最长回文子串
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const len = s.length
  if (len < 2) return s
  let maxLen = 1
  let res = s.substring(0,1)
  for(let i = 0; i < len; i++) {
      let oddStr = centerSpread(s, i, i)
      let evenStr = centerSpread(s, i, i+1)
      let maxLenStr = oddStr.length > evenStr.length ? oddStr : evenStr
      if (maxLenStr.length > maxLen) {
          maxLen = maxLenStr.length
          res = maxLenStr
      }
  }
  return res
};
function centerSpread(s, left, right) {
  let len = s.length
  let i = left
  let j = right
  while(i >= 0 && j < len) {
      if (s[i] === s[j]) {
          i--
          j++
      } else {
          break
      }
  }
  return s.substring(i + 1, j)
}

console.log(longestPalindrome("SQQSYYSQQS"))