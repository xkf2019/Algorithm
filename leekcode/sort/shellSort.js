// 希尔排序-插入
const shellSort = arr => {
  const len = arr.length
  let gap = Math.floor(len / 2)
  for (gap; gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      let j = i
      const temp = arr[j]
      while (j - gap >= 0 && temp < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j -= gap
      }
      arr[j] = temp
    }
  }

  return arr
}

// 希尔排序 - 交换
const shellSort2 = arr => {
  let len = arr.length
  let gap = Math.floor(len / 2)
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i
      while (j - gap >= 0 && arr[j] < arr[j - gap]) {
        const temp = arr[j]
        arr[j] = arr[j - gap]
        arr[j - gap] = temp
        j -= gap
      }
    }
    gap = Math.floor(gap / 2)
  }
  return arr
}

function shellSort3(arr) {
  for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      let j = i
      while(j - gap >= 0 && arr[j] < arr[j - gap]) {
        const temp = arr[j]
        arr[j] = arr[j - gap]
        arr[j - gap] = temp
        j = j - gap
      }
    }
  }
  return arr
}

console.log(shellSort3([2,1,3,8,4,6,9,3,2]))