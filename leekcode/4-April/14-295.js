/**
 * 295. 数据流的中位数
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.bHeap = new Heap()
  this.sHeap = new Heap('small')
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function(num) {
  if (!this.bHeap.size()) {
      this.bHeap.push(num)
      return
  }
  if (num > this.bHeap.getTop()) this.sHeap.push(num)
  else this.bHeap.push(num)
  if (this.sHeap.size() > this.bHeap.size()) this.bHeap.push(this.sHeap.pop())
  if (this.bHeap.size() === this.sHeap.size() + 2) this.sHeap.push(this.bHeap.pop())
  return
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function() {
  if (this.bHeap.size() === this.sHeap.size()) {
      return (this.bHeap.getTop() + this.sHeap.getTop()) / 2
  } else {
      return this.bHeap.getTop()
  }
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
  console.log(index)
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
getTop() {
    return this.heap[0]
}
size() {
    return this.heap.length
}
}

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/