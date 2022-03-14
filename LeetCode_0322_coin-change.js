/**
  322. Coin Change
  
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
**/

/**
 * Classic DP problem, bottom-up approach
 * Step 1: Initialize dp array to maximum amount (givenAmount + 1) with (givenAmount + 1) length
 * Step 2: DP array holds min value to form coin from zero till amountGiven
 * Step 3: So initialize initial dp value for zero as zero (Means need 0 coin to make 0 amount)
 * Step 4: Iterate over the amount
 *         As this is bottom-up approach, we fill the min coin to make the amount from zero till the given amount
 * Step 5: Then inner iteration should be over the list of coins
 *         As we need to find the minimum number of coins required to make the particular amount, we need to iterate over the coins to find it
 * Step 6: currentAmount - currentCoin should be greater or equal to zero, only then we can add that dp value to our solution, else it exceeds
 * Step 7: so dp[currentAmount] should take minimum of dp[currentAmount] and 1 (number of currentCoin) + dp[currentAmount - currentCoin]
 * Step 8: return dp[amount] if it is not equal to the initial maxAmount, else return -1 (means no possible way to form the amount given)
 */
var coinChange = function(coins, amount) {
   let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let currentAmount = 0; currentAmount <= amount; currentAmount++) {
        for (let coin = 0; coin < coins.length; coin++) {
            let currentCoin = coins[coin];
            if (currentAmount - currentCoin >= 0) {
                dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - currentCoin])
            }
        }
    }
    return dp[amount] !== amount + 1 ? dp[amount] : -1;
};
coinChange([1, 3, 4, 5], 7); // 2

/**
  dp[0] = 0;
  dp[1] = 1;  
  dp[2] = 2;
  dp[3] = 1;
  dp[4] = 1;
  dp[5] = 1;
  dp[6] = 2;      
  dp[7] = 2;
        1(coin 1) + dp[6] (dp[7-1]) = 3
        1(coin 3) + dp[4] (dp[7-3]) = 2
        1(coin 4) + dp[3] (dp[7-4]) = 2
        1(coin 5) + dp[2] (dp[7-5]) = 3
            So min is 2

**/
