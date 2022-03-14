/*
  You are given an array prices where prices[i] is the price of a given stock on the ith day.

  Find the maximum profit you can achieve. You may complete at most two transactions.

  Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
  
  Example 1:
  Input: prices = [3,3,5,0,0,3,1,4]
  Output: 6
  Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
  Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
  
  Example 2:
  Input: prices = [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
  
  Example 3:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: In this case, no transaction is done, i.e. max profit = 0.
  
*/

/**
 * TIPS : List how we solved first stock problem, same approach
 * But for second transaction, one no need to spend full money, instead they can use profit from first transaction
 *
 * Step 1 : Find min price, so keep the first value of stock as min price and iterate from second index
 * Step 2 : Find max profit by selling the stock against min price, take max always by comparing with previous max
 * Step 3 : Similar to first transaction, find min price for second transaction, but in this step, one no need to spend full money, instead can use profit from first transation
 * Step 4 : And so subtract profit 1 from min price of second transaction
 * Step 5 : Find second transaction max profit by selling current stock against second min price
 * Step 6 : As second max profit always hold max profit of current and previous transaction, this is the required result
 */

var maxProfit = function(prices) {
    let minPrice_1 = prices[0], minPrice_2 = prices[0];
    let maxProfit_1 = 0, maxProfit_2 = 0;
    
    for (let count = 1; count < prices.length; count ++) {
        minPrice_1 = Math.min(minPrice_1, prices[count]);
        maxProfit_1 = Math.max(maxProfit_1, prices[count] - minPrice_1);
        
        minPrice_2 = Math.min(minPrice_2, prices[count] - maxProfit_1);
        maxProfit_2 = Math.max(maxProfit_2, prices[count] - minPrice_2);
    }
    
    return maxProfit_2;
};

maxProfit([3,3,5,0,0,3,1,4]);
