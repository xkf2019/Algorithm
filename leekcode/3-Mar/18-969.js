/**
 * 969. 煎饼排序
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function(arr) {
  const list = []
  const ans = []
  for (let i = 0; i < arr.length; i++) {
      list[arr[i]] = i 
  }
  for (let i = arr.length; i >= 1; i--) {
      if (i - 1 === list[i]) continue
      if (list[i] + 1 > 1) {
          ans.push(list[i] + 1)
          reverse(arr, list[i] + 1, list)
      }
      if (i > 1) {
          ans.push(i)
          reverse(arr, i, list)
      }
  }
  return ans
};
function reverse(arr, n, list) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
      swap(arr, i, j)
      list[arr[i]] = i
      list[arr[j]] = j
  }
}

function swap (arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

console.log(pancakeSort([9,8,4,1,3,2,6,5,7]).join(''))