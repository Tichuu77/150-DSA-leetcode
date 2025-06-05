var isPalindrome = function (s) {

    let regex = /[\s!@#\$%\^&\*\(\)\-_+=~`{\[\]}\|\\:;<,>\.\?\/'""]/g;
    let str = s.replace(regex, '').toLowerCase();

    if (str.length <= 0) {
        return true
    }
    let i = 0;
    let j = str.length - 1

    while (i < j) {
        if (str[i] !== str[j]) {
            return false
        }
        i++
        j--
    }
    return true
};


// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


// 🧠 Explanation (Step-by-step):
// Convert all characters to lowercase using toLowerCase().

// Remove all non-alphanumeric characters using regex:

// [^a-z0-9] matches anything not a letter or number.

// g flag means global (replace all).

// Initialize two pointers:

// left starts at the beginning of the cleaned string.

// right starts at the end.

// While left < right, compare characters at both ends:

// If s[left] !== s[right], it’s not a palindrome.

// Otherwise, move left++ and right-- inward.

// If the loop completes without returning false, it’s a palindrome.

// Return true at the end.

// 📦 Time and Space Complexity:
// Time Complexity: O(n)

// One pass to clean the string

// One pass to check palindrome using two pointers

// Space Complexity: O(n)

// For the cleaned string (you can reduce this to O(1) if done in-place with only pointers)

