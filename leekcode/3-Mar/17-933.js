// 933. 最近的请求次数

var RecentCounter = function() {
  this.reList = []
};

/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function(t) {
 this.reList.push(t)
 while (this.reList.length > 1 && t - this.reList[0] > 3000) {
     this.reList.shift()
 }
 return this.reList.length 
};

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/