var romanToInt = function (s) {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let num = 0;

    for (let i = 0; i < s.length; i++) {
        let current = romanMap[s[i]];
        let next = romanMap[s[i + 1]];

        if (next > current) {
            num += next - current;
            i++; // skip next since already processed
        } else {
            num += current;
        }
    }

    return num;
};

// leetcode problem 13: Roman to Integer
// link: https://leetcode.com/problems/roman-to-integer/
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3
// Example 2:
// Input: s = "IV"
// Output: 4
// Explanation: IV = 4