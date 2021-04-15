/**
 * 641. 设计循环双端队列
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.dequeue = []
  this.capacity = k
  this.count = 0
  this.head = 0
  this.tail = 0
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.count < this.capacity) {
      this.head = (this.head - 1 + this.capacity) % this.capacity
      this.dequeue[this.head] = value
      this.count++
      return true
  }
  return false
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.count < this.capacity) {
      this.dequeue[this.tail] = value
      this.tail = (this.tail + 1) % this.capacity
      this.count++
      return true
  }
  return false
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if (this.count > 0) {
      this.head = (this.head + 1) % this.capacity
      this.count--
      return true
  }
  return false
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if (this.count > 0) {
      this.tail = (this.tail - 1 + this.capacity) % this.capacity
      this.count--
      return true
  }
  return false
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if (this.count > 0) {
      return this.dequeue[this.head]
  }
  return -1
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if (this.count > 0) {
      return this.dequeue[(this.tail - 1 + this.capacity) % this.capacity]
  }
  return -1
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.count === 0
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.count === this.capacity
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/