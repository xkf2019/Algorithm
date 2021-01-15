/**
 * Largest Rectangle in Histogram
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (heights.length < 2) return heights[0] || 0
  const len = heights.length
  let max = 0
  let stack = []
  heights.push(0)
  heights.unshift(0)
  for (let i = 0; i < len + 2; i++) {
    while(heights[i] < heights[stack[stack.length - 1]]) {
      const curHeight = heights[stack.pop()]
      while(heights[stack[stack.length - 1]] === curHeight) {
        stack.pop()
      }
      let curWidth = i - stack[stack.length -1] - 1
  
      max = Math.max(max, curHeight * curWidth);
    }
    stack.push(i)
  }
  return max
};
console.log(largestRectangleArea([2,4]))