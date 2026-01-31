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

/**

TS Based
KEY POINTS
 - Order of iterations matter, as this is combination we need to use the coins as much as we can
     - Hence coin iteration comes first
 - At iteration:
    - First coin → combinations using only coin[0]
    - Second coin → combinations using coin[0..1]
    …
    - Last coin → combinations using all coins (We lock the order: once we move past a coin, we never go back and place it before earlier coins.)
        🔑 This is what prevents permutations.
 - Inner loop
     - Try to build all amounts that can include this coin.
     - Why start at coin?
        - You can’t make an amount smaller than the coin’s value using that coin.
     - Why go forward?
        - Forward traversal allows unlimited usage of the same coin.
 - dp[current] += dp[current - coin];
     - “Every way to make current - coin can be extended by adding one coin to make current.”
     - We’re not inventing new combinations — we’re extending existing valid ones.
     - Coins are added in a fixed order
     So:
        - 1 + 2 + 1 + 1 ❌ never happens
        - 2 + 1 + 1 + 1 ❌ never happens
        - Only 1 + 1 + 1 + 2 ✅ happens
        Order is structurally enforced, not checked manually.


Time complexity
 - O(coins.length × amount)
Space complexity
 - O(amount)

**/
function change(amount: number, coins: readonly number[]): number {
    // dp[x] = number of combinations to make amount x
    const dp: number[] = new Array(amount + 1).fill(0);

    // Base case: one way to make amount 0 (choose nothing)
    dp[0] = 1;

    // Process coins one by one to avoid counting permutations
    for (const coin of coins) {
        for (let current = coin; current <= amount; current++) {
            dp[current] += dp[current - coin];
        }
    }

    return dp[amount];
}

/**
CODE WALKTHRO
Concrete Walkthrough
Input
amount = 5
coins = [1, 2]

Initial
dp = [1, 0, 0, 0, 0, 0]

Coin = 1
current	dp update	dp
1	dp[1] += dp[0]	[1,1,0,0,0,0]
2	dp[2] += dp[1]	[1,1,1,0,0,0]
3	dp[3] += dp[2]	[1,1,1,1,0,0]
4	dp[4] += dp[3]	[1,1,1,1,1,0]
5	dp[5] += dp[4]	[1,1,1,1,1,1]

All 1s → only using coin 1.

Coin = 2
current	dp update	dp
2	dp[2] += dp[0]	[1,1,2,1,1,1]
3	dp[3] += dp[1]	[1,1,2,2,1,1]
4	dp[4] += dp[2]	[1,1,2,2,3,1]
5	dp[5] += dp[3]	[1,1,2,2,3,3]

Final:
dp[5] = 3

Combinations:
1+1+1+1+1
2+1+1+1
2+2+1

For each coin, I extend all previously valid smaller amounts, ensuring coins are only added in non-decreasing order.
**/

// -------------------------- TO PRINT ALL COMBINATION --------------------------------

// If asked to print all the combination of coins, then it is BACKTRACKING
var coinChangeCombinations = function(coins, amount) {
    const result = [];

    const backtrack = (remaining, start, path) => {
        if (remaining === 0) {
            result.push([...path]); // copy to avoid mutation
            return;
        }

        for (let i = start; i < coins.length; i++) {
            const coin = coins[i];
            if (coin <= remaining) {
                path.push(coin);
                backtrack(remaining - coin, i, path); // i: reuse coin
                path.pop(); // undoes the last choice so you can try the next option cleanly
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
