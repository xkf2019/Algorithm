// function mergeSort(arr, left, right) {
//   left = typeof left === 'undefined' ?  0 : left
//   right = typeof right === 'undefined' ? arr.length - 1 : right
//   if (right <= left) return
//   const mid = (left + right) >> 1
//   console.log(left,right,mid)
//   mergeSort(arr, left, mid)
//   mergeSort(arr, mid + 1, right)
//   merge(arr, left, mid, right)
//   return arr
// }

// function merge (arr, left, mid, right) {
//   let temp = []
//   let i = left
//   let j = mid + 1
//   let k = 0
//   while (i <= mid && j <= right) {
//     temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
//   }
//   while (i <= mid) temp[k++] = arr[i++]
//   while(j <= right) temp[k++] = arr[j++]
//   for( let p = 0; p < temp.length; p++) {
//     arr[left + p] = temp[p]
//   }
// }

const mergeSort = (arr, left, right) => {
  left = left === undefined ? 0 : left
  right = right === undefined ? arr.length - 1 : right
  if (left >= right) return
  const mid = (left + right) >> 1
  mergeSort(arr, left, mid)
  mergeSort(arr, mid + 1, right)
  merge(arr, left, mid, right)
  return arr
}
const merge = (arr, left, mid, right) => {
  const temp = []
  let k = 0
  let i = left
  let j = mid + 1
  while (i <= mid && j <= right) temp[k++] = arr[i] <= arr[j] ? arr[i++] : arr[j++]
  while(i <= mid) temp[k++] = arr[i++]
  while(j <= right) temp[k++] = arr[j++]
  for (let p = 0; p < temp.length; p++) {
    arr[left + p] = temp[p]
  }

}

console.log(mergeSort([2,1,3,8,4,6,9,3,2]))