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


maxProfit([7,2,5,3,2,6,4])
