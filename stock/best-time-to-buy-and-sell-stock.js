/**
    You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
    
 */

 /**
  * Step 1: First always find the min amount, so take first value as min and iterate from second element
  * Step 2: So that can calculate max profit, by selling current day stock with min amount
  * Step 3: And store the max profit obtained till time
  * Step 4: Then compare max profit obtained and current profit obtain when selling min amount with current day price
  * Step 5: So max obtained till last iteration is max profit
  */

var maxProfit = function(prices) {
    let minAmount = prices[0];
    let maxProfit = 0;
  
    for (let count = 1; count < prices.length; count ++) {
        // Alternatively use if condition to check to speedup processing time
        minAmount = Math.min(minAmount, prices[count]);
        maxProfit = Math.max(maxProfit, prices[count] - minAmount)
    }
    
    return maxProfit;
};

/**
 TS based, optimized

 Key point
  - We scan prices once, tracking the minimum buy price seen so far and the best profit achievable at each step, 
  ensuring every valid transaction is evaluated implicitly in linear time.
  - So first update minPrice
  - Then find profit by subtracting current price with minPrice so far
  
 Complexity:
    - Time: O(n) — single pass through prices
    - Space: O(1) — constant extra space
**/
function maxProfit(prices: readonly number[]): number {
  if (prices.length < 2) return 0; //Early guard for invalid input

  let minPrice = prices[0];
  let bestProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const price = prices[i];

    if (price < minPrice) {
      minPrice = price;
      continue; // avoids unnecessary subtraction
    }

    const profit = price - minPrice;
    if (profit > bestProfit) {
      bestProfit = profit;
    }
  }
  return bestProfit;
}


maxProfit([7,2,5,3,2,6,4])
