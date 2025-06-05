var merge = function(nums1, m, nums2, n) {
    let i = m - 1;       // pointer for nums1
    let j = n - 1;       // pointer for nums2
    let k = m + n - 1;   // fill position in nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

// Constraints:

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


// 🧠 Approach (Step-by-step):
// Start from the end of both arrays (nums1 and nums2) to avoid overwriting elements in nums1.

// Use three pointers:

// i → points to the last actual element in nums1 (m - 1)

// j → points to the last element in nums2 (n - 1)

// k → points to the last index in nums1 (m + n - 1)

// Compare nums1[i] and nums2[j]:

// If nums1[i] > nums2[j], place nums1[i] at index k and move i and k back.

// Otherwise, place nums2[j] at index k and move j and k back.

// Repeat this process until all elements from nums2 are placed (i.e., while j >= 0).

// If nums1 is exhausted first (i < 0), remaining elements in nums2 are automatically copied in.

// Since both arrays were already sorted, this results in a final sorted array.

// 📦 Time and Space Complexity:
// Time Complexity: O(m + n)

// Every element from both arrays is checked once.

// Space Complexity: O(1)

// Done in-place without using extra space.

