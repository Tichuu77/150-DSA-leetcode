var searchInsert = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;

    while (s <= e) {
        let m = Math.floor((s + e) / 2);

        if (nums[m] === target) {
            return m;
        }

        if (nums[m] < target) {
            s = m + 1;
        } else {
            e = m - 1;
        }
    }

    return s; 
};

// leetcode problem 35: Search Insert Position
// link: https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Approach: Binary Search
// Time Complexity: O(log n) where n is the length of nums
// Space Complexity: O(1) since we are using a constant amount of space
// Note: The function returns the index where the target would be inserted if it is not found in the array.
// If the target is found, it returns the index of the target.
// If the target is less than the first element, it returns 0.
// If the target is greater than the last element, it returns nums.length.
// If the target is between two elements, it returns the index where it would be inserted.
// If the target is equal to an element, it returns the index of that element.
