/**
 * 47. 全排列 II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const ans = [], track = [], ind = [], meno = {}, len = nums.length
  function travese(lev) {
      if (!meno[lev]) {
          meno[lev] = []
      }
      if (track.length === len) {
          ans.push([...track])
          return
      }
      if (lev > len - 1) return
      for (let i = 0; i < len; i++) {
          if (ind.includes(i)) continue
          if (meno[lev].includes(nums[i])) continue
          meno[lev].push(nums[i])
          track.push(nums[i])
          ind.push(i)
          travese(lev + 1)
          track.pop()
          ind.pop()
          let p = lev
          while (meno[p++]) {
              delete meno[p]
          }
      }
  }
  travese(0)
  return ans
};