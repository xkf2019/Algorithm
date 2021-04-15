/**
 * 1753. 移除石子的最大得分
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  let max = a
  if (max < b) max = b
  if (max < c) max = c
  if (max === a && b + c < a) return b + c
  if (max === b && a + c < b) return a + c
  if (max === c && a + b < c) return a + b
  return (a + b + c) >> 1
};

// 大顶堆
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function(a, b, c) {
  let heap = new Heap()
  heap.push(a)
  heap.push(b)
  heap.push(c)
  let ans = 0
  while(true) {
      let x = heap.pop()
      let y = heap.pop()
      if (!x || !y) return ans
      heap.push(--x)
      heap.push(--y)
      ans++
  }
  return ans
};
class Heap {
constructor(type) {
  this.isBig = type !== 'small' || type === undefined
  this.heap = []
}
push(val) {
  this.heap.push(val)
  this.shiftUp(this.heap.length - 1)
}
pop() {
  if (!this.heap.length) return
  this.swap(0, this.heap.length - 1)
  const val = this.heap.pop()
  this.shiftDown(0)
  return val
}
shiftDown(index) {
  if (index > this.getParentIndex(this.heap.length - 1)) return
  const l = this.getLeftIndex(index)
  const r = this.getRightIndex(index)
  let tmp = index

  if (l < this.heap.length && (this.isBig && this.heap[l] > this.heap[tmp]) || (!this.isBig && this.heap[l] < this.heap[tmp]) ) tmp = l
  if (r < this.heap.length && (this.isBig && this.heap[r] > this.heap[tmp]) || (!this.isBig && this.heap[r] < this.heap[tmp]) ) tmp = r
  
  if (tmp !== index) {
    this.swap(index, tmp)
    this.shiftDown(tmp)
  }
}
shiftUp(index) {
  const parentIndex = this.getParentIndex(index)
  if (parentIndex < 0) return
  if ((this.isBig && this.heap[index] > this.heap[parentIndex]) || (!this.isBig && this.heap[index] < this.heap[parentIndex])) {
    this.swap(index, parentIndex)
    this.shiftUp(parentIndex)
  }
}
getParentIndex(index) {
  return (index - 1) >> 1
}
getLeftIndex(index) {
  return index * 2 + 1
}
getRightIndex(index) {
  return index * 2 + 2
}
swap(i, j) {
  const t = this.heap[i]
  this.heap[i] = this.heap[j]
  this.heap[j] = t
}
getValue() {
  return this.heap
}
}