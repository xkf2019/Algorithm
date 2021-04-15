/**
 * 354. 俄罗斯套娃信封问题
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  const len = envelopes.length
  if (len < 2) return len
  envelopes = envelopes.sort((a,b) => {
      if (a[0] === b[0]) {
          return b[1] - a[1]
      } else {
          return a[0] - b[0]
      }
  })
  return getLongest(envelopes.map(v => v[1]))
};
function getLongest(arr) {
  const tail = [arr[0]]
  let end = 0, i = 1
  while(i < arr.length) {
      if (arr[i] > tail[end]) {
          tail[++end] = arr[i]
      } else {
          const ind = binarySearch(tail, arr[i])
          tail[ind] = arr[i]
      }
      i++
  }
  return end + 1
}

function binarySearch(arr, target) {
  let l = 0, r = arr.length - 1
  while(l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] > target) {
          r = mid - 1
      } else if (arr[mid] < target) {
          l = mid + 1
      } else {
          return mid
      }
  }
  return l
}
