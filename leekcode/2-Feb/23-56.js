/**
 * 56. 合并区间
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const ans = []
  for (let i = 0; i < intervals.length;) {
      let start = intervals[i][0]
      let end = intervals[i][1]
      let j = i + 1
      while(j < intervals.length && intervals[j][0] <= end) {
          end = Math.max(end, intervals[j][1])
          j++
      }
      ans.push([start, end])
      i = j
  }
  return ans
};