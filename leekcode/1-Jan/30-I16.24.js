/**
 * pairs-with-sum-lcci
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
  if (nums.length < 2) return []
  let map = new Map()
  const ans = []
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i]) && map.get(nums[i]) > 0) {
          ans.push([target - nums[i], nums[i]])
          map.set(nums[i], map.get(nums[i]) - 1)
          continue
      }
      map.set(target- nums[i], map.has(target- nums[i]) ? map.get(target- nums[i]) + 1 : 1)
  }
  return ans
};