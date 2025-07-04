
var moveZeroes = function(nums) {
    let l=0
    let r=0

    while((r<nums.length)||(l<nums.length)){
        if(nums[r]===0){
            r++
        }
        
        else{
            if(r===nums.length){
                l++
            }
            else{
            let temp = nums[r]
            nums[r]=nums[l]
            nums[l]=temp
            l++
            r++
            }
        }
    }
};


// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1