/**
 * min-stack
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
  this.minStack = []
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack[this.stack.length] = x
  this.minStack[this.minStack.length] = this.minStack.length ? Math.min(this.minStack[this.minStack.length - 1], x) : x
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.stack.length = this.stack.length - 1
  this.minStack.length = this.minStack.length - 1
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/