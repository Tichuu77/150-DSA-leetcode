var longestSubsequence = function(s, k) {
     let zeros = 0;
    let count = 0;
    let value = 0;
    let pow = 1;

     
    for (let ch of s) {
        if (ch === '0') zeros++;
    }

    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '1') {
            if (pow > k) break;  
            if (value + pow <= k) {
                value += pow;
                count++;
            } else {
                break;
            }
        }
        if (pow <= k) pow *= 2;
    }

    return zeros + count;  let result = 0;
    let num = 0;
    let len = s.length;

    for (let i = len - 1; i >= 0; i--) {
        if (s[i] === '1' && (num + Math.pow(2, len - 1 - i)) <= k) {
            num += Math.pow(2, len - 1 - i);
            result++;
        } else if (s[i] === '0') {
            result++;
        }
    }
    
    return result;
};



// You are given a binary string s and a positive integer k.

// Return the length of the longest subsequence of s that makes up a binary number less than or equal to k.

// Note:

// The subsequence can contain leading zeroes.
// The empty string is considered to be equal to 0.
// A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
 

// Example 1:

// Input: s = "1001010", k = 5
// Output: 5
// Explanation: The longest subsequence of s that makes up a binary number less than or equal to 5 is "00010", as this number is equal to 2 in decimal.
// Note that "00100" and "00101" are also possible, which are equal to 4 and 5 in decimal, respectively.
// The length of this subsequence is 5, so 5 is returned.
// Example 2:

// Input: s = "00101001", k = 1
// Output: 6
// Explanation: "000001" is the longest subsequence of s that makes up a binary number less than or equal to 1, as this number is equal to 1 in decimal.
// The length of this subsequence is 6, so 6 is returned.
 

// Constraints:

// 1 <= s.length <= 1000
// s[i] is either '0' or '1'.
// 1 <= k <= 109