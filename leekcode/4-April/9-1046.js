/**
 * 1046. 最后一块石头的重量
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length === 1) return stones[0]
  stones = stones.sort((a, b) => b - a)
  while(stones.length > 1) {
      let a = stones.shift() - stones.shift()
      const ind = binarySearch(stones, a)
      stones.splice(ind, 0, a)
  }
  return stones[0]
};
function binarySearch(arr,target) {
  let l = 0
  let r = arr.length - 1
  while(l <= r) {
      const mid = l + ((r - l) >> 1)
      if (arr[mid] === target) return mid
      else if (arr[mid] > target) {
          l = mid + 1
      } else if (arr[mid] < target) {
          r = mid - 1
      }
  }
  return l
}