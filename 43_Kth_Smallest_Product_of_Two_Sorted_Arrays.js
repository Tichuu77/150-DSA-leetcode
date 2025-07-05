var kthSmallestProduct = function(nums1, nums2, k) {
   const n1 = nums1.length,
        n2 = nums2.length;
    let pos1 = 0,
        pos2 = 0;
    while (pos1 < n1 && nums1[pos1] < 0) {
        pos1++;
    }
    while (pos2 < n2 && nums2[pos2] < 0) {
        pos2++;
    }
    let left = -1e10,
        right = 1e10;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let count = 0;
        let i1 = 0,
            i2 = pos2 - 1;
        while (i1 < pos1 && i2 >= 0) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += pos1 - i1;
                i2--;
            }
        }
        i1 = pos1;
        i2 = n2 - 1;
        while (i1 < n1 && i2 >= pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2--;
            } else {
                count += i2 - pos2 + 1;
                i1++;
            }
        }
        i1 = 0;
        i2 = pos2;
        while (i1 < pos1 && i2 < n2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i2++;
            } else {
                count += n2 - i2;
                i1++;
            }
        }
        i1 = pos1;
        i2 = 0;
        while (i1 < n1 && i2 < pos2) {
            if (nums1[i1] * nums2[i2] > mid) {
                i1++;
            } else {
                count += n1 - i1;
                i2++;
            }
        }
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
};




// Given two sorted 0-indexed integer arrays nums1 and nums2 as well as an integer k, return the kth (1-based) smallest product of nums1[i] * nums2[j] where 0 <= i < nums1.length and 0 <= j < nums2.length.
 

// Example 1:

// Input: nums1 = [2,5], nums2 = [3,4], k = 2
// Output: 8
// Explanation: The 2 smallest products are:
// - nums1[0] * nums2[0] = 2 * 3 = 6
// - nums1[0] * nums2[1] = 2 * 4 = 8
// The 2nd smallest product is 8.
// Example 2:

// Input: nums1 = [-4,-2,0,3], nums2 = [2,4], k = 6
// Output: 0
// Explanation: The 6 smallest products are:
// - nums1[0] * nums2[1] = (-4) * 4 = -16
// - nums1[0] * nums2[0] = (-4) * 2 = -8
// - nums1[1] * nums2[1] = (-2) * 4 = -8
// - nums1[1] * nums2[0] = (-2) * 2 = -4
// - nums1[2] * nums2[0] = 0 * 2 = 0
// - nums1[2] * nums2[1] = 0 * 4 = 0
// The 6th smallest product is 0.
// Example 3:

// Input: nums1 = [-2,-1,0,1,2], nums2 = [-3,-1,2,4,5], k = 3
// Output: -6
// Explanation: The 3 smallest products are:
// - nums1[0] * nums2[4] = (-2) * 5 = -10
// - nums1[0] * nums2[3] = (-2) * 4 = -8
// - nums1[4] * nums2[0] = 2 * (-3) = -6
// The 3rd smallest product is -6.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 5 * 104
// -105 <= nums1[i], nums2[j] <= 105
// 1 <= k <= nums1.length * nums2.length
// nums1 and nums2 are sorted.