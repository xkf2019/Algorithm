/**
 * group-anagrams
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map()
  for (let str of strs) {
    let _str = str
    _str = _str.split('').sort().join('')
    map.get(_str) ? map.get(_str).push(str) : map.set(_str, [str])
  }
  return Array.from(map.values())
};