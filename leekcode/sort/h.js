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
    this.heap.pop()
    this.shiftDown(0)
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
}

const heap = new Heap('small')
heap.push(9)
heap.push(11)
heap.push(7)
heap.push(100)
heap.push(8)
heap.push(5)
heap.push(8)
heap.push(6)
heap.push(4)
heap.push(3)
heap.push(6)
heap.push(20)
heap.pop()
heap.pop()
heap.pop()
heap.pop()
console.log(heap.getValue())