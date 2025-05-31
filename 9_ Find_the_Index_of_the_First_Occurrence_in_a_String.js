var strStr = function(haystack, needle) {
    if (needle === "") return 0;

    // Step 1: Build LPS (Longest Prefix which is also Suffix) array
    const buildLPS = (pattern) => {
        let lps = Array(pattern.length).fill(0);
        let len = 0; // length of the previous longest prefix suffix
        let i = 1;

        while (i < pattern.length) {
            if (pattern[i] === pattern[len]) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len !== 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    };

    let lps = buildLPS(needle);

    // Step 2: Use the LPS array to search
    let i = 0; // index for haystack
    let j = 0; // index for needle

    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        }

        if (j === needle.length) {
            return i - j; // match found
        } else if (i < haystack.length && haystack[i] !== needle[j]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1; // not found
};

// leetcode problem 28: Find the Index of the First Occurrence in a String
// link: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.


//approach: KMP algorithm
// Time Complexity: O(n + m) where n is the length of haystack and m is the length of needle
// Space Complexity: O(m) for the LPS array
// Note: This implementation uses the KMP (Knuth-Morris-Pratt) algorithm to efficiently find the first occurrence of a substring in a string.
// This algorithm preprocesses the needle to create an LPS (Longest Prefix which is also Suffix) array, which is then used to skip unnecessary comparisons during the search in the haystack.
// This is a more efficient approach than the naive O(n * m) solution, especially for larger strings.