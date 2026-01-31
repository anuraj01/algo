Pattern
-------
Key idea is
 - “Let’s compute the best answer for every amount from 1 up to amount.”
 - When we compute dp[currentAmount],
 - all smaller amounts (0 .. currentAmount - 1) are already solved.

To solve the problem
---------------------
 - Initialize DP array of amount+1 to Infinity or anount+1 (why amount + 1, becuase we solve it from 0 till amount)
     - let dp = Array(amount + 1).fill(amount + 1);
 - Dp[0] is always 0, as 0 coins needed to make 0 amount
     - dp[0] = 0;
 - Then iterate from 1 till amount in outer loop
     - for (let currentAmount = 1; currentAmount <= amount; currentAmount++)
 - Iterate with each and every coin for every amount
     - for (const coin of coins) 
 - So that we get best answer for particular amount when coin array is done
 - Check if current coin is greater than actual amount
     -  if (currentAmount - coin >= 0)
 - As we already computed earlier amount best DP
 - Minimum of (dp[currentAmount - coin] + 1) and (dp[currentAmount]) is the best
 - Finally to check whether any solution exists
 - return dp[amount] !== amount + 1 ? dp[amount] : -1;

Followup - To give list of amount
-----------------------------------
 - While declaring DP array, declare
 - const prevCoin = Array(amount + 1).fill(null); // which holds list of best coins
 - When assigning the value dp[currentAmount] = dp[currentAmount - coin] + 1;
 - Assign prevCoin[currentAmount] = coin;
 - Then finally destructure the coin
 - const result = [];
    let curr = amount;

    while (curr > 0) {
        const coin = prevCoin[curr];
        result.push(coin);
        curr -= coin;
    }

    return result;
