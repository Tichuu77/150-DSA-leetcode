
var plusOne = function (digits) {
    let flag = true
    let i = digits.length - 1
    let addOn = 0

    while (flag) {

        if (i === digits.length - 1) {
            let sum = 1 + digits[i]
            if (sum >= 10) {
                digits[i] = Math.floor(sum % 10)
                if (i === 0) {
                    digits.unshift(Math.floor(sum / 10))
                    flag = false
                }
                else {
                    addOn = Math.floor(sum / 10)
                    i--
                }
            }
            else {
                 digits[i]=sum
                flag = false
            }
        }
        else {
            if (addOn > 0) {
                let sum = addOn + digits[i]
                if (sum >= 10) {
                    digits[i] = Math.floor(sum % 10)
                    if (i === 0) {
                        digits.unshift(Math.floor(sum / 10))
                        flag = false
                    }
                    else {
                        addOn = Math.floor(sum / 10)
                        i--
                    }
                }
                else{
                    digits[i]=sum
                    flag=false
                }
            }
            else{
                 flag=false
            }
        }
    }
    return digits
};


// leetcode problem 66: Plus One
// link: https://leetcode.com/problems/plus-one/

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
 

// Constraints:

// 1 <= digits.length <= 100
// 0 <= digits[i] <= 9
// digits does not contain any leading 0's.

// Approach:
// 1. Start from the last digit and add 1.
// 2. If the sum is less than 10, update the digit and return the array.
// 3. If the sum is 10 or more, set the current digit to the remainder when divided by 10 and carry over the quotient to the next digit.
// 4. If we reach the first digit and still have a carry, insert a new digit at the beginning of the array.
// 5. The time complexity is O(n) where n is the length of the digits array, and the space complexity is O(1) since we are modifying the array in place.
// Note: The function handles edge cases such as when the input is a single digit 9, which results in an output of [1, 0].
