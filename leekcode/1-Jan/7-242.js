/**
 * valid-anagram
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const map = {}
  for(let char of s) {
      map[char] = map[char] ? map[char] + 1 : 1 
}
  for(let char of t) {
      if (map[char] > 0) {
          map[char]--
      } else {
          return false
      }
}
  return true
}

var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const arr = new Array(26).fill(0)
  for(let char of s) {
      arr[char.charCodeAt() - 97]++
}
  for(let char of t) {
     arr[char.charCodeAt() - 97]--
     if (arr[char.charCodeAt() - 97] < 0) return false
}

  return true
}

console.log(isAnagram("anagram", "nagaram"))