/**
 * merge-sorted-array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 从 num1 尾部插入
var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while(i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--]
    }
    
    return nums1
};

// 从头开始，需要额外空间
var merge = function(nums1, m, nums2, n) {
    const _nums1 = [...nums1]
    let i = 0
    let j = 0
    while (i < m && j < n) {
        if (_nums1[i] > nums2[j]) {
            nums1[i + j] = nums2[j++]
        } else {
            nums1[i + j] = _nums1[i++]
        }
    }
    console.log(i,j)
    while (i < m) {
        nums1[i + j] = _nums1[i++]
    }
    while (j < n) {
        nums1[i + j] = nums2[j++]
    }
};
