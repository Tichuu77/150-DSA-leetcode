var addBinary = function (a, b) {
    a = a.split('')
    b = b.split('')

    let lena = a.length
    let lenb = b.length
    if (a.length !== b.length) {
        if (a.length > b.length) {

            for (let i = 0; i < lena - lenb; i++) {

                b.unshift('0')
            }
        }
        else {
            for (let i = 0; i < (lenb - lena); i++) {
                a.unshift('0')
            }
        }
    }


    let next = 0
    let str = []
    for (let i = b.length - 1; i >= 0; i--) {

        if ((next > 0) && b[i] === '1' && a[i] === '1') {
            str.unshift('1')
            next = 1
        }
        else if (next > 0 && b[i] === '1' && a[i] === '0') {
            str.unshift('0')
            next = 1
        }
        else if (next > 0 && b[i] === '0' && a[i] === '1') {
            str.unshift('0')
            next = 1
        }
        else if (next < 1 && b[i] === '1' && a[i] === '1') {
            str.unshift('0')
            next = 1
        }
        else if (next < 1 && b[i] === '0' && a[i] === '1') {
            str.unshift('1')
            next = 0
        }
        else if (next < 1 && b[i] === '1' && a[i] === '0') {
            str.unshift('1')
            next = 0
        }
        else if (next > 0 && b[i] === '0' && a[i] === '0') {
            str.unshift('1')
            next = 0
        }
        else {
            str.unshift('0')
            next = 0
        }
    }
    if (next > 0) {
        str.unshift('1')
        next = 0
    }
    return str.join('')
};


// leetcode problem 67: Add Binary
// link: https://leetcode.com/problems/add-binary/

// Given two binary strings a and b, return their sum as a binary string.

 

// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
 

// Constraints:

// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.

// Approach:
// 1. Start from the last digit and add the two digits.
// 2. If the sum is greater than 1, carry over the 1 to the next digit.
// 3. If the sum is less than or equal to 1, just add the sum to the result.
// 4. If one string is longer than the other, pad the shorter string with leading zeros.
// 5. Return the result as a binary string.
// 6. If there is a carry left after processing all digits, add it to the front of the result.
// 7. Join the result array to form the final binary string.
// 8. Return the final binary string.
// Time Complexity: O(n), where n is the length of the longer string.
// Space Complexity: O(n), where n is the length of the longer string.