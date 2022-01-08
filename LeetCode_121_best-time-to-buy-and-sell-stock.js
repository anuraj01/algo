/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minAmount = prices[0];
    let maxProfit = 0;
  
    /**
     * Step 1: First always find the min amount 
     * Step 2: So that can calculate max profit, by selling current day stock with min amount
     * Step 3: And store the max profit obtained till time
     * Step 4: Then compare max profit obtained and current profit obtain when selling min amount with current day price
     * Step 5: So max obtained till last iteration is max profit
     */
    for (let count = 1; count < prices.length; count ++) {
        // Alternatively use if condition to check to speedup processing time
        minAmount = Math.min(minAmount, prices[count]);
        maxProfit = Math.max(maxProfit, prices[count] - minAmount)
    }
    
    return maxProfit;
};


maxProfit([7,2,5,3,2,6,4])
