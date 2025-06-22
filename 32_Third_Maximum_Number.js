var thirdMax = function(nums) {

    let stack = Array(3).fill(-2147483649)

    for(let i=0;i<nums.length;i++){
      if(nums[i]>stack[2]){
        if(nums[i]>stack[1]){
            if(nums[i]>stack[0]){
                let temp= stack[0]
                stack[0]=nums[i]
                let stemp = stack[1]
                stack[1]=temp
                stack[2]=stemp
            }
            else{
                if(nums[i]<stack[0]){
                  let temp = stack[1]
                stack[1]=nums[i]
                stack[2]=temp
                }
              
            }
        }
        else{
            if(nums[i]<stack[1]){
             stack[2]=nums[i]
            }
           
        }
      }
    }

    if(stack[2]=== -2147483649){
        return stack[0]
    }
    else{
        return stack[2]
    }
};




// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

 

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.
// Example 2:

// Input: nums = [1,2]
// Output: 2
// Explanation:
// The first distinct maximum is 2.
// The second distinct maximum is 1.
// The third distinct maximum does not exist, so the maximum (2) is returned instead.
// Example 3:

// Input: nums = [2,2,3,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2 (both 2's are counted together since they have the same value).
// The third distinct maximum is 1.
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 