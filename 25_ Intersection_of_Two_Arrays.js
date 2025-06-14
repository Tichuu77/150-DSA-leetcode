var intersection = function (nums1, nums2) {


    if (nums1.length === 1 && nums2.length === 1) {
        if (nums1[0] === nums2[0]) {
            return [nums1[0]]
        }
        else {
            return []
        }
    }
    let map = {}

    let output = []

    let i = 0
    let j = 0
  while (i < nums1.length || j < nums2.length) {
    if (i < nums1.length) {
        if (map[nums1[i]] === undefined) {
            map[nums1[i]] = 'first';
        } else if (map[nums1[i]] === 'second') {
            map[nums1[i]] = 'clean';
            output.push(nums1[i]);
        }
        i++;
    }

    if (j < nums2.length) {
        if (map[nums2[j]] === undefined) {
            map[nums2[j]] = 'second';
        } else if (map[nums2[j]] === 'first') {
            map[nums2[j]] = 'clean';
            output.push(nums2[j]);
        }
        j++;
    }
}
}


// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000