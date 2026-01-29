/*
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

  Find the maximum profit you can achieve. You may complete at most k transactions.

  Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
  
  Example 1:
  Input: k = 2, prices = [2,4,1]
  Output: 2
  Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
  
  Example 2:
  Input: k = 2, prices = [3,2,6,5,0,3]
  Output: 7
  Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
  
*/

/**
 * TIPS : Like how we solve Stock problem 3
 * Have an array to maintain minPrice and maxProfit and return maxProfit for last transaction
 *
 * Step 1 : Find min price, so keep the first value of stock as min price and iterate from second index
 * Step 2 : Find max profit by selling the stock against min price, take max always by comparing with previous max
 * Step 3 : Similar to first transaction, find min price for second transaction, but in this step, one no need to spend full money, instead can use profit from first transation
 * Step 4 : And so subtract profit 1 from min price of second transaction
 * Step 5 : Find second transaction max profit by selling current stock against second min price
 * Step 6 : As second max profit always hold max profit of current and previous transaction, this is the required result
 * Step 7 : Write a function to handle step 2 till step 5
 * Step 8 : Max profit of final transaction is our required result
 */

var maxProfit = function(k, prices) {
    if (k === 0) return 0;
    let minPrice = Array(k);
    let maxProfit = Array(k);
    
    minPrice.fill(prices[0]);
    maxProfit.fill(0);
    
    for (let count = 1; count < prices.length; count ++) {
        findMinPriceMaxProfit(minPrice, maxProfit, prices[count], k);
    }
    
    return maxProfit[k - 1]
};


const findMinPriceMaxProfit = (minPrice, maxProfit, price, k) => {
    for (let count = 0; count < k; count ++) {
        minPrice[count] = Math.min(minPrice[count], price - (count !== 0 ? maxProfit[count - 1] : 0));
        maxProfit[count] = Math.max(maxProfit[count], price - minPrice[count]);
    }
}

/**
  TS based

  Key point
    - Same pattern, first find minPrice at each step
    - As it has k transaction, minPrice can be subtracted from previousProfit
    - Then maxProfit is obtained from selling current price with minPrice
    - ** We wont have previousProfit for first transaction
    
  Complexity
     - n = prices.length → number of days
     - k = maximum number of allowed transactions
  Time Complexity:
    - O(n × k)
      - Outer loop runs once per day (n)
      - Inner loop runs once per transaction (k)
Space Complexity:
    - O(k)
      - Two arrays of size k (minPrice, profit)
      - No extra space grows with n
**/

function maxProfit(k: number, prices: readonly number[]): number {
  if (k === 0 || prices.length === 0) return 0;

  const minPrice: number[] = Array(k).fill(prices[0]);
  const profit: number[] = Array(k).fill(0);

  for (let day = 1; day < prices.length; day++) {
    const price = prices[day];

    for (let t = 0; t < k; t++) {
      const prevProfit = t > 0 ? profit[t - 1] : 0;

      minPrice[t] = Math.min(minPrice[t], price - prevProfit);
      profit[t] = Math.max(profit[t], price - minPrice[t]);
    }
  }

  return profit[k - 1];
}

maxProfit(2, [2,4,1]);
