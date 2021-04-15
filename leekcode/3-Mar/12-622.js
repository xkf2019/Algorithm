/**
 * 622. 设计循环队列
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = []
  this.headIndex = 0
  this.capacity = k
  this.count = 0
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.count < this.capacity) {
      this.queue[(this.headIndex + this.count) % this.capacity] = value
      this.count++
      return true
  }
  return false
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.count > 0) {
      this.headIndex = (this.headIndex + 1) % this.capacity
      this.count--
      return true
  }
  return false
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.count === 0 ? -1 : this.queue[this.headIndex]
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.count === 0 ? -1 : this.queue[(this.headIndex + this.count - 1) % this.capacity]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.count === 0
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.count === this.capacity
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/