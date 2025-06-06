var maxProfit = function(prices) {
    if(prices.length===1){
        return 0
    }

    let buyedStock = prices[0];
    let maxPrice=0;

    for(let i =0; i<prices.length; i++){
        if(prices[i]<buyedStock){
            buyedStock=prices[i]
        }

        let currentPrice = prices[i]-buyedStock
        if(currentPrice>maxPrice){
            maxPrice=currentPrice
        }
    }
    return maxPrice
};


// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



// 🧠 Approach Explanation:
// Edge Case:

// If only one price is given, you can't make any transaction → return 0.

// Initialize:

// buyedStock = prices[0]: first day’s price is the initial buying price.

// maxPrice = 0: stores the maximum profit found so far.

// Iterate through prices:

// For each price:

// Update Buy Price: If the current price is less than buyedStock, it's a better buying point.

// Calculate Profit: currentPrice = prices[i] - buyedStock

// Update Max Profit: If currentPrice > maxPrice, store it.

// Return max profit after checking all days.

// 🕒 Time and Space Complexity:
// Time Complexity: O(n) — One pass through the array.

// Space Complexity: O(1) — No extra space used.

// 📌 Summary:
// Variable	Purpose
// buyedStock	Tracks the lowest price seen so far
// maxPrice	Tracks the maximum profit so far
// currentPrice	Potential profit if selling today