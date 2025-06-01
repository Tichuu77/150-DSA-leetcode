var climbStairs = function (n) {

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }
    if (n === 1) {
        return 1
    }
    let mod = n % 2
    let possibleUnCompbo = Math.floor((n - 1) / 2)
    let num = n
    let sum = 0

    if (mod === 0) {
        sum = sum + 2
    }
    else {
        sum = sum + 1
    }



    for (let i = 0; i < possibleUnCompbo; i++) {
        num = num - 1

        let numFac = factorial(num)
        let numA = factorial(num - i - 1)
        let numB = factorial(i + 1)
        sum = sum + (numFac / (numA * numB))
    }
    return sum
};

// leet code problem 70: Climbing Stairs
// link: https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45
