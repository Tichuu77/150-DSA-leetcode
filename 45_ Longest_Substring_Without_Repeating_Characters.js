var lengthOfLongestSubstring = function(s) {
   let mp = new Map();
    let l = 0; 
    let r = 0;
    let len = 0;
    
    while(r < s.length) {
        if(mp.has(s[r])) {
            if(mp.get(s[r]) >= l) l = mp.get(s[r]) + 1;
        }
        mp.set(s[r], r);
        len = Math.max(len, r - l + 1);
        r++;
    }
    return len;
};


// Given a string s, find the length of the longest substring without duplicate characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.