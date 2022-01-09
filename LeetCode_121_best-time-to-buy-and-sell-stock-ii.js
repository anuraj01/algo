/**
 * @param {number[]} prices
 * @return {number}
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


maxProfit([7,1,5,3,6,4]);

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
