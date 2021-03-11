/**
 * 数组的相对排序
 * relative-sort-array
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let p = 0
  let j = 0
  while(j < arr2.length) {
      for(let i = p; i < arr1.length; i++) {
          if (arr1[i] === arr2[j]) {
              if (i !== p) {
                  let temp = arr1[p]
                  arr1[p] = arr1[i]
                  arr1[i] = temp
              }
              p++
          }
      }
      j++
  }
  if (p < arr1.length) {
      quickSort(arr1, p, arr1.length - 1)
  }
  function quickSort(arr, begin, end) {
      if (begin >= end) return
      const pivot = partition(arr, begin, end)
      quickSort(arr, begin, pivot - 1)
      quickSort(arr, pivot + 1, end)
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
  return arr1

};

var relativeSortArray = function(arr1, arr2) {
    const map = {}
    let ans = []
    arr1.forEach(v => map[v] = (map[v] || 0) + 1)
    arr2.forEach(v =>  {
        ans = ans.concat(Array(map[v]).fill(v)) 
        delete map[v]
    })
    Object.keys(map).forEach(v => ans = ans.concat(Array(map[v]).fill(v)))
    return ans
};