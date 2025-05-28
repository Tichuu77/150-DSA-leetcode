var isValid = function (s) {
    if (s.length <= 1) {
        return false
    }

    stack = []
    map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }

    for (let i = 0; i < s.length; i++) {
        if ((stack.length === 0) && (s[i] === ')' || s[i] === ']' || s[i] === '}')) {
            return false
        }
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        }
        else {
            let popValue = stack.pop()
            if (s[i] !== map[popValue]) {
                return false
            }
        }
    }
    if(stack.length>0){
        return false
    }
    return true
};

// leetcode problem 20: Valid Parentheses
// link: https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.