var twoSum = function(nums, target) {
    let len = nums.length;
    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    
    return []; // If no solution is found
};

// leetcode link: https://leetcode.com/problems/two-sum/
// Example usage: 
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// Time Complexity: O(n^2)
// Space Complexity: O(1) since we are not using any additional data structures
// Note: This is a brute force solution. There are more efficient solutions using hash maps.
// However, this solution is straightforward and easy to understand.
// This code defines a function `twoSum` that takes an array of integers `nums` and an integer `target`.
// It returns the indices of the two numbers such that they add up to `target`.
// The function uses a nested loop to check each pair of numbers in the array.
// The outer loop iterates through each element, and the inner loop checks the subsequent elements.
// If a pair is found that sums to the target, their indices are returned as an array.
// If no such pair exists, an empty array is returned.
// This solution has a time complexity of O(n^2) due to the nested loops, which is not optimal for large arrays.
// However, it is simple and works for small input sizes.
// Note: For larger inputs, consider using a hash map to achieve O(n) time complexity.
// This code is a solution to the "Two Sum" problem on LeetCode.
// The problem is to find two indices in the array such that the numbers at those indices add up to a given target.
// The solution uses a brute force approach with a time complexity of O(n^2).
// This is a basic implementation and can be optimized further.
// The function can be improved using a hash map to achieve O(n) time complexity.
// This code is a solution to the "Two Sum" problem on LeetCode.
// The problem is to find two indices in the array such that the numbers at those indices add up to a given target.
// The solution uses a brute force approach with a time complexity of O(n^2).
// This is a basic implementation and can be optimized further.
// The function can be improved using a hash map to achieve O(n) time complexity.