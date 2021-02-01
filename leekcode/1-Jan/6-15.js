/**
 * 3sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  const arr = []
  const memory = {}
  nums.sort((a,b) => a - b)
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        arr.push([nums[i], nums[left++],nums[right--]])
        while(left < right && nums[left] === nums[left - 1]) left++
        while(left < right && nums[right] === nums[right + 1]) right++
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }
      
  }
  return arr
};

console.log(threeSum(
  [-1,0,1,2,-1,-4,1,-5,6,3,5,6,4,6,-8,0,-3,-4]))