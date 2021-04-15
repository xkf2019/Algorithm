// 1670. 设计前中后队列

var FrontMiddleBackQueue = function() {
  this.triQueue = []
  this.count = 0
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushFront = function(val) {
  this.triQueue.unshift(val)
  this.count++
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  this.triQueue.splice(this.count >> 1, 0, val)
  this.count++
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushBack = function(val) {
  this.triQueue.push(val)
  this.count++
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.count > 0) {
      this.count--
      return this.triQueue.shift()
  }
  return -1
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popMiddle = function() {
   if (this.count > 0) {
      const midIndex = this.count % 2 === 0 ? (this.count >> 1) - 1 : this.count >> 1
      this.count--
      return this.triQueue.splice(midIndex,1)
  }
  return -1
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.count > 0) {
      this.count--
      return this.triQueue.pop()
  }
  return -1
};

/**
* Your FrontMiddleBackQueue object will be instantiated and called as such:
* var obj = new FrontMiddleBackQueue()
* obj.pushFront(val)
* obj.pushMiddle(val)
* obj.pushBack(val)
* var param_4 = obj.popFront()
* var param_5 = obj.popMiddle()
* var param_6 = obj.popBack()
*/