/**
 * trapping-rain-water
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var trap = function(height) {
  const len = height.length
  if (len < 3) return 0
  let left = 0
  let right = len - 1
  let maxLeft = 0
  let maxRight = 0
  let rains = 0
  while (left < right) {
      if (height[left] < height[right]) {
          height[left] < maxLeft ? (rains +=  maxLeft - height[left]) : maxLeft = height[left]
          left++
      } else {
          height[right] < maxRight ? (rains +=  maxRight - height[right]) : maxRight = height[right]
          right--
      }
  }
  return rains
};

// 单调递减栈
var trap = function(height) {
  const len = height.length
  if (len < 3) return 0
  let i = 0
  let stack = []
  let ans = 0
  while (i < len) {
      while(stack.length && height[i] > height[stack[stack.length - 1]]) {
        let topHeight = height[stack.pop()]
        if (!stack.length) break
        let distance = i - stack[stack.length - 1] - 1
        ans += (Math.min(height[i], height[stack[stack.length - 1]]) - topHeight) * distance
      }
      stack.push(i++)
  }
  return ans
};