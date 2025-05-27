var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let oldOrder = strs[0].length;

    for (let i = 1; i < strs.length; i++) {
        let flag = 0;
        let newstr = "";
        let minLength = Math.min(strs[i].length, oldOrder);

        for (let j = 0; j < minLength; j++) {
            if (strs[i - 1][j] === strs[i][j]) {
                flag++;
                newstr += strs[i][j];
            } else {
                break;
            }
        }

        if (flag === 0) {
            return '';
        }

        prefix = newstr;
        oldOrder = flag;
    }

    return prefix;
};


// leetcode problem 14: Longest Common Prefix
// link: https://leetcode.com/problems/longest-common-prefix/

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.