/**
 * 4. 寻找两个正序数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arr = []
  const m = nums1.length
  const n = nums2.length
  const midIndex = (m + n) >> 1
  let i = 0
  let j = 0
  while (i < m && j < n) {
      if (nums1[i] < nums2[j]) {
          arr.push(nums1[i++])
      } else if (nums1[i] > nums2[j]) {
          arr.push(nums2[j++])
      } else {
          arr.push(nums1[i++])
          arr.push(nums2[j++])
      }
  }
  while (i < m) arr.push(nums1[i++])
  while (j < n) arr.push(nums2[j++])
  if ((m + n) % 2 === 0) {
      return (arr[midIndex - 1] + arr[midIndex]) / 2
  } else {
      return arr[midIndex]
  }

};