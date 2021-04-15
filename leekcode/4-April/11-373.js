/**
 * 373. 查找和最小的K对数字
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const map = new Map()
  for (let i = 0; i < nums1.length; i++) {
      for(let j = 0; j < nums2.length; j++) {
          map.set([nums1[i], nums2[j]], nums1[i] + nums2[j])
      }
  }
  const arr = [...map.keys()]
  arr.sort((a, b) => map.get(a) - map.get(b))
  return arr.slice(0, k)
};
