var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    if(x===0){
        return true
    }
    let arr=[]
    while(x!==0){
       let num = Math.floor(x%10)
       arr.push(num)
       x=Math.floor(x / 10);
    }

    if(arr.length===1){
        return true
    }
    let j = arr.length-1
    let i =0;

    while(i<j){
        if(arr[i]!==arr[j]){
            return false
        }
        i++
        j--
    }
    return true
};

// 9// leetcode problem 9: Palindrome Number
// link: https://leetcode.com/problems/palindrome-number/
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 
