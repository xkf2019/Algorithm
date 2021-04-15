/**
 * 33. 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1
  while(l <= r) {
      const m = (l + r) >> 1
      // console.log(m)
      if (nums[m] === target) return m
      if (nums[0] > nums[m]) {
          if (nums[m] < target && nums[r] >= target) {
              l = m + 1
          } else {
              r = m - 1
          }
      } else {
          if (nums[m] > target && nums[0] <= target) {
              r = m - 1
          } else {
              l = m + 1
          }
      }
  }
  return -1
};