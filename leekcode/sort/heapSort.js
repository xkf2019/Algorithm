const heapSort = arr => {
  let len = arr.length
  const firstNotLeafNode = Math.floor(len / 2) - 1
  for (let i = firstNotLeafNode; i >=0; i--) {
    heapify(arr, i, len)
  }

  for (let i = len - 1; i > 0; i--) {
    swap(arr, 0, i)
    heapify(arr, 0, --len)
  }
  return arr
}

function heapify(arr, i, len) {
  let left = i * 2 + 1
  let right = i * 2 + 2
  let largetIndex = i
  if (left < len && arr[left] > arr[largetIndex])
    largetIndex = left
  if (right < len && arr[right] > arr[largetIndex])
    largetIndex = right
  if (i !== largetIndex) {
    swap(arr, i, largetIndex)
    heapify(arr, largetIndex, len)
  }

}

function swap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

console.log(heapSort([3,1,6,3,7,8,4,-10,9,1000,32,48,84,11]))