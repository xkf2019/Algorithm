// function quickSort(arr, begin, end) {
//   begin = begin || 0
//   end = end || arr.length - 1
//   if (end <= begin) return
//   let pivot = partition(arr, begin, end)
//   console.log('pivot', pivot)
//   quickSort(arr, begin, pivot - 1)
//   quickSort(arr, pivot + 1, end)
// }

// function partition(arr, begin, end) {
//   let pivot = end
//   let counter = begin
//   for (let i = begin; i < end; i++) {
//     if (arr[i] < arr[pivot]) {
//       let temp = arr[counter]
//       arr[counter] = arr[i]
//       arr[i] = temp
//       counter++
//     }
//   }
//   let temp = arr[pivot]
//   arr[pivot] = arr[counter]
//   arr[counter] = temp
//   return counter
// }

const quickSort = (arr, start, end) => {
  start = start === undefined ? 0 : start
  end = end === undefined ? arr.length - 1 : end
  if (start >= end) return
  const pirot = partition(arr, start, end)
  quickSort(arr, start, pirot - 1)
  quickSort(arr, pirot + 1, end)
  return arr
}

const partition = (arr, start, end) => {
  let counter = start
  let pirot = end
  for (let i = start; i < end; i++) {
    if (arr[i] < arr[pirot]) {
      if (i !== counter) {
        const temp = arr[i]
        arr[i] = arr[counter]
        arr[counter] = temp
      }
      counter++
    }
  }
  const temp = arr[counter]
  arr[counter] = arr[pirot]
  arr[pirot] = temp
  return counter
}

console.log(quickSort([2,4,1,5,8,4,6,3]))

