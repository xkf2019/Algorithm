/**
 * 300. 最长递增子序列
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let dp = [1]
  let ans = 1
  for(let i = 1; i < nums.length; i++) {
      dp[i] = 1
      for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1)
          }
      }
      ans = Math.max(ans, dp[i])
  }
  return ans
};

// 二分查找
var lengthOfLIS = function(nums) {
  const tail = [nums[0]]
  let end = 0
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > tail[end]) {
          tail[++end] = nums[i]
      } else {
          const ind = binarySearch(tail, 0, end, nums[i])
          tail[ind] = nums[i]
      }
  }
  return tail.length
};
function binarySearch(arr, left, right, target) {
  while(left <= right) {
      let mid = (left + right) >> 1
      if (arr[mid] > target) {
          right = mid - 1
      } else if (arr[mid] < target){
          left = mid + 1
      } else {
          return mid
      }
  }
  return left
}