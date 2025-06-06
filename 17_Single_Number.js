var singleNumber = function(nums) {
    if(nums.length===1){
        return nums[0]
    }

    let arr = nums.sort()
    let i =0
    while(i<arr.length){
        if(arr[i]!==arr[i+1]){
            return arr[i]
        }
        i=i+2
    }
};


// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.


// 🧠 Approach Explanation:
// Edge Case:

// If the array has only one element, return it directly (nums[0]).
// This handles input like [99].

// Sorting the Array:

// nums.sort() arranges numbers in ascending order.

// When sorted, all duplicates will be next to each other.

// Example:
// For input [4, 1, 2, 1, 2], sorted array becomes [1, 1, 2, 2, 4].

// Iterating in Pairs:

// Using while(i < arr.length) and checking two elements at a time:

// If arr[i] !== arr[i+1], then arr[i] is the single number (since duplicates come in pairs).

// Else, skip the pair by increasing i by 2.

// Why i = i + 2:

// Because we are sure that all numbers appear twice, we can safely jump in steps of 2.

// 🕒 Time and Space Complexity:
// Time Complexity:
// O(n log n) — due to the sort() operation.

// Space Complexity:
// O(1) (ignoring the space used by the sort algorithm if it's in-place).

