var majorityElement = function (nums) {
    let res = 0;
    let majority = 0;
    
    for (let n of nums) {
        if (majority === 0) {
            res = n;
        }
        
        majority += n === res ? 1 : -1;
    }
    
    return res;    
};

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109