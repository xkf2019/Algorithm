
/**
 * remove-duplicates-from-sorted-array
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  var i = 0;
  while(i < nums.length) {
      if (nums[i + 1] != nums[i]) {
          i++
      } else {
          nums.splice(i+1, 1)
      }
  }
  return i + 1
};

var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  var i = 0
  for (var j = 1; j < nums.length; j++) {
      if (nums[i] !== nums[j]) {
          i++
          nums[i] = nums[j]
      }
  }
  return i + 1
};