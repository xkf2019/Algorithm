/**
 * 1124. 表现良好的最长时间段
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
  const arr = [0]
  let count = 0
  let ans = 0
  for (let i = 0; i < hours.length; i++) {
      if (hours[i] > 8) count++
      else count--
      arr.push(count)
  }
  const stack = [0]
  for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] < arr[stack[stack.length - 1]]) {
          stack.push(i)
      }
  }
  for (let i = arr.length - 1; i > 0; i--) {
      if (i < stack[stack.length - 1]) stack.pop()
      let top = stack.length - 1
      while(top >= 0 && arr[i] - arr[stack[top]] > 0) {
           ans = Math.max(ans, i - stack[top--])
      }
  }
  return ans
};

var longestWPI = function(hours) {
  const ind = {0: -1}
  const f = {0: 0}
  let cnt = 0, ans = 0
  for (let i = 0; i < hours.length; i++) {
      if (hours[i] > 8) cnt++
      else cnt--
      if (ind[cnt] === undefined) {
          ind[cnt] = i
          if (ind[cnt - 1] === undefined) f[cnt] = 0
          else f[cnt] = f[cnt - 1] + i - ind[cnt - 1]
      }
      if (ind[cnt - 1] === undefined) continue
      ans = Math.max(ans, f[cnt - 1] + i - ind[cnt - 1])
  }
  return ans
};