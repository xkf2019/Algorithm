/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  var len = nums.length
  var _k = k % len
  if (len < 2 || _k === 0 ) return nums
  var begin = 0 // 记录每次移动的索引
  var start = 0 // 记录开始移动的索引
  var waitingMove = nums[0] // 记录将要移动的值
  var i = 0 // 记录移动次数
  while (i < len) { // 数组每个元素只需移动一次
      // 遍历开始时，移动索引与开始索引相同，这没有问题
      // 但下一次再相同时，表示出现循环移动，即出现 a ->, c-> a, a-> c循环，数组其它元素没有移动
      //  如 nums = [-1,100,3,99 ]， k = 2。 此时需要将移动索引+1，并重置开始移动索引
      if (i !== 0 && begin === start) { 
          begin += 1
          start = begin
          waitingMove = nums[begin]
      }
      var moveIndex = (begin + _k) % len // 将要移动至的目标索引
      var tmp = nums[moveIndex] // 暂存目标索引的值
      nums[moveIndex] = waitingMove // 把要移动的值放入目标索引中
      waitingMove = tmp // 目标索引原本的值成了新的将要移动的值
      begin = moveIndex // 重置下一次移动的索引
      i++ // 数组值移动次数+1
  }
  return nums
};

// 三次反转
var reverse = function(nums, begin, last) {
  while(begin < last) {
      var tmp = nums[begin]
      nums[begin] = nums[last]
      nums[last] = tmp
      begin++
      last--
  }
};

var rotate = function(nums, k) {
  var len = nums.length
  var _k = k % len
  if (len < 2 || _k === 0 ) return nums
  reverse(nums, 0, nums.length -1)
  reverse(nums, 0, _k -1 )
  reverse(nums, _k, nums.length -1)
  return nums
};