/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = {}
  for (let i = 0; i < words.length; i++) {
    map[words[i]] ? map[words[i]]++ : map[words[i]] = 1
  }
  let ans = Object.keys(map).sort((a, b) => {
    if (map[a] === map[b]) {
      return a > b ? 1 : -1
    }
    return map[b] - map[a]
  }).filter((item, index) => index < k)
  return ans
};