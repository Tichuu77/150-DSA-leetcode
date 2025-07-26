var majorityElement = function(nums) {
    nums.sort((a,b)=> a-b)
let maxCount = Math.floor(nums.length/3)
let count =0
let arr=[]

console.log(maxCount)
    for(let i =0;i<nums.length;i++){
        count++
        if(nums[i]!==nums[i+1]){
             if(count>maxCount){
            arr.push(nums[i])
        }
            count =0
        }
    }
    return arr
};


// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109
 