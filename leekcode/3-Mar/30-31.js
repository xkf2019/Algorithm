/**
 * 31. 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const len = nums.length
  let i = len - 1
  let j = i - 1
  while(j >= 0) {
      if (nums[i] <= nums[j]) {
          i--
          j--
          continue
      }
      break;
  }
  if (j < 0) return nums.sort((a, b) => a - b)
  for (let p = len - 1; p >= i; p--) {
      if (nums[p] > nums[j]) {
          [nums[p], nums[j]] = [nums[j], nums[p]]
          reverse(nums, i, len - 1)
          return nums
      }
  }
};
function reverse(arr, start, end) {
  while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
  }
}