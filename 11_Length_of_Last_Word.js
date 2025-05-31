var lengthOfLastWord = function(s) {
    let str = s.trim()
    if(str.length===1){
        return 1
    }
 let count =0;
    for(let i=str.length-1; i>=0;i--){
        if(str[i]===' '){
            return count
        }
        count++
    }

    return count
};

// leetcode problem 58: Length of Last Word
// link: https://leetcode.com/problems/length-of-last-word/

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// Note: The function trims the string to remove leading and trailing spaces, then iterates from the end of the string to count the characters until it encounters a space or reaches the beginning of the string.

//approach:
// 1. Trim the string to remove leading and trailing spaces.
// 2. If the trimmed string is empty, return 0.
// 3. Initialize a count variable to 0.
// 4. Iterate from the end of the string to the beginning:
//    a. If the current character is a space, return the count.
//    b. If the current character is not a space, increment the count.
// 5. If the loop completes without finding a space, return the count (which will be the length of the last word).
// 6. The time complexity is O(n) where n is the length of the string, and the space complexity is O(1) since we are using a constant amount of space.
// 7. The function handles edge cases such as strings with only spaces or a single character word.
// 8. The function returns the length of the last word in the string, which is the desired output.
