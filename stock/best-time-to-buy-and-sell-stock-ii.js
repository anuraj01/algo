/**
  You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

  On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

  Find and return the maximum profit you can achieve.
  
  Example 1: 
  Input: prices = [7,1,5,3,6,4]
  Output: 7
  Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
  Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
  Total profit is 4 + 3 = 7.
  
  Example 2: 
  Input: prices = [1,2,3,4,5]
  Output: 4
  Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
  Total profit is 4.
  
  Example 3:
  Input: prices = [7,6,4,3,1]
  Output: 0
  Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 */


/*
 * Plot the graph and see
 *               *(7)
 *                \                         ^ *(6)
 *                 \            ^ *(5)    //    \
 *                  \         //    \    //      *(4)
 *                   \       //       *(3)
 *                    \     //
 *                     *(1)
 *
 *
 * As seen in the graph, buy the stock only when you see the rise
 * Step 1 : Iterate from second index
 * Step 2 : Profit occurs only when current day price is higher than previous day
 * Step 3 : Add profit only when step 2 satisfies
 *
 * - In the above example, you can buy the stock on day 2 (@ price of 1) because price @ day 3 (5) is greater than price at day 2
 * - Similarly add the transactions likewise
 */


var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for (let count = 1; count < prices.length; count ++) {
      
        // Profit occurs only when current day price is higher than previous day price
        if (prices[count] > prices[count - 1]) {
            maxProfit += prices[count] - prices[count - 1];
        }
    }
    return maxProfit;
};

/**
  TS based

  Key Point 
   - When you’re allowed to trade as many times as you want, the best approach is to take profit every time the price goes up, 
   because each rise adds to your total and doesn’t affect other trades.
   
  Complexity:
    - Time: O(n) — one linear pass
    - Space: O(1) — constant extra space
**/
function maxProfit(prices: readonly number[]): number {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const delta = prices[i] - prices[i - 1];

    // Capture every ascending edge (greedy accumulation)
    if (delta > 0) {
      totalProfit += delta;
    }
  }

  return totalProfit;
}


maxProfit([7,1,5,3,6,4]);
