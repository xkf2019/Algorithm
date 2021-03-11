/**
 * 剑指 Offer 40. 最小的k个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  if (arr.length === 0 || k === 0) return []
  return quickSearch(arr, 0, arr.length - 1, k - 1)
};

function quickSearch(arr, begin, end, k) {
  const pirot = partition(arr, begin, end)
  if (pirot === k) {
    return arr.slice(0, k + 1)
  }
  return pirot > k ? quickSearch(arr, begin, pirot - 1, k) : quickSearch(arr,pirot + 1 , end, k)
}
function partition(arr, begin, end) {
  let counter = begin
  let pirot = end
  for (let i = begin; i < end; i++) {
    if (arr[i] < arr[pirot]) {
      let temp = arr[i]
      arr[i] = arr[counter]
      arr[counter] = temp
      counter++
    }
  }
  let temp = arr[pirot]
  arr[pirot] = arr[counter]
  arr[counter] = temp
  return counter
}

console.log(getLeastNumbers([3,2,1], 2))