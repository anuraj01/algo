/**
    518. Coin Change 2 (Medium)
    
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

 

Example 1:

Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1
 

Constraints:

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000

**/

/**
 * Classic DP problem, fill 2D dp array to solve it
 * Step 1: Initialize 2D array of length coins.length + 1
 * Step 2: Fill first column to 1 and first row to 0
 * Step 3: Iterate thro coins.length and amount to fill remaining dp array
 * Step 4: When currentAmount is greater or equal to preCoin, then include and exclude the coins, else just exlcude it
 *         Exclude -> go to the previous row upward with currentAmount
 *         Include -> go to left side of current coin array, subtracting the amount from currentCoin
 * Step 5: Final result will be at last element of dp array (dp[coins.length][amount])
 */
var change = function(amount, coins) {
    let dp = Array(coins.length + 1);
    
    // fill first column as 1 and first row as 0
    for (let count = 0; count < dp.length; count ++) {
        dp[count] = Array(amount + 1);
        if (count === 0) dp[0].fill(0); // fill first row to 0
        dp[count][0] = 1;
    }
    
    // fill rest of the dp table
    for (let coin = 1; coin <= coins.length; coin ++) {
        for (let currentAmount = 1; currentAmount <= amount; currentAmount ++) {
            let prevCoin = coins[coin - 1];
            let excludeCoin = dp[coin - 1][currentAmount]; // go to the previous row upward with currentAmount
            let includeCoin = dp[coin][currentAmount - prevCoin]; // go to left side of current coin array
            
            if (currentAmount - prevCoin >= 0) {  // currentAmount >= prevCoin
                dp[coin][currentAmount] = includeCoin + excludeCoin;
            }
            else {
                dp[coin][currentAmount] = excludeCoin;
            }
        }
    }
    
    return dp[coins.length][amount];
};
change(5, [1, 2, 5]); // 4

/**
                       Amount 
                  0   1   2   3   4   5
                 -----------------------
       (0) 0  |   1   0   0   0   0   0
       (1) 1  |   1   1   1   1   1   1
coins  (2) 2  |   1   1   2   2   3   3
       (5) 3  |   1   1   2   2   3   4





**/


// If asked to print all the combination of coins, then it is BACKTRACKING
var coinChangeCombinations = function(coins, amount) {
    const result = [];

    const backtrack = (remaining, start, path) => {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < coins.length; i++) {
            const coin = coins[i];
            if (coin <= remaining) {
                path.push(coin);
                backtrack(remaining - coin, i, path); // i: reuse coin
                path.pop();
            }
        }
    };

    backtrack(amount, 0, []);
    return result;
};


/**
coins = [1,2,5]
amount = 5

[
  [1,1,1,1,1],
  [1,1,1,2],
  [1,2,2],
  [5]
]

Aspect	        Counting ways (DP)	        Listing combinations (Backtracking)
-----           ------------------          ------------------------------------
Goal	            Number of ways	        All combinations
Complexity	        O(amount × coins)	    Exponential
Space	            O(amount)	            O(amount × number of combos)
Approach	        Bottom-up DP	        Recursion + backtracking

**/
