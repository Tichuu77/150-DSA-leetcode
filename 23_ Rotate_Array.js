var rotate = function(nums, k) {
    if(k===0){
        return nums
    }
    let arr = new Array(nums.length).fill(null)
    console.log('arr',arr)
    
    let len = nums.length 
    let lenF = Math.ceil(nums.length/k)-1
    let i =0
    let interval = 0
    while(interval<lenF){
        let innerInterval =0
        while(innerInterval <k && i<len){
            if(k+i<len){
                  arr[k+i]=nums[k+i]
            nums[k+i]=nums[i]
            }
            if(interval===0  ){
              if(k+i===(len-k)+i){
                    nums[i]=arr[k+i]
                }
                else{
                nums[i]=nums[(len-k)+i]
                }
            }
            if(arr[i-k]!==null&&arr[i-k]!==undefined){
                nums[i]=arr[i-k]
            }
            innerInterval++
            i++
        
        }
        interval++
        i=i+k
    }
    return nums
};


// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105
 

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?