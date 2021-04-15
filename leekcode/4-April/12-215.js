/**
 * 215. 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const len = nums.length
  let ans = 0
  for (let p = (len >> 1) - 1;p >= 0; p--) {
      heapify(nums, p, len)
  }
  for(let i = len - 1, j = len, p = 1; p < k; p++, i-- ) {
      swap(nums, 0, i)
      heapify(nums, 0, --j)
  }
  return nums[0]
};

function heapify(nums, i, len) {
  const l = i * 2 + 1
  const r = i * 2 + 2
  let large = i
  if (l < len && nums[large] < nums[l]) large = l
  if (r < len && nums[large] < nums[r]) large = r
  if (i !== large) {
      swap(nums,i,large)
      heapify(nums, large, len)
  }
}

function swap (arr, a,b) {
  const t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
}