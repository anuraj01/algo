/**

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1 :
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

Constraints
1 <= nums.length <= 100
0 <= nums[i] <= 400
**/

/**
 * Typical DP problem
 * Step 1: Initialize initial values for dp[0] and dp[1], as max of current and prev
 * Step 2: Iterate from Index 2 and dp[index] alwasy holds maximum of previous DP value and current value + second previous
 * Step 3: At the end of iteration, last DP value will have maximum amount
 */

var rob = function(nums) {
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let count = 2; count < nums.length; count++) {
        dp[count] = Math.max(dp[count - 1], nums[count] + dp[count - 2])
    }
    
    return dp[nums.length -1]
};

/**
 * To optimize on space complexity
 * Step 1: We no need all dp array info in place, we need last 2 for every transaction
 * Step 2: So swap the highest to secondMax and have prev highest in firstMax and result is secondMax
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    let current = 0,
        firstMax = nums[0],
        secondMax = Math.max(nums[0], nums[1]);
    
    for (let count = 2; count < nums.length; count++) {
        current = Math.max(secondMax, nums[count] + firstMax);
        firstMax = secondMax;
        secondMax = current;
    }
    
    return secondMax;
};

/**
    At each house, I have two choices:
    rob it (which means I must skip the previous house), or
    skip it (which means I keep whatever max I had so far).

    dp[i] = max(
      dp[count - 1],           // skip current house
      dp[count - 2] + nums[count]  // rob current house
    )


**/

/**
TS Based

This is a dynamic programming problem where each decision splits into rob-or-skip, 
and because each state only depends on the previous two, 
we can compute the optimal solution in linear time using constant space.

Time Complexity: O(n)
    - Each house is processed once
    - Single linear pass
Space Complexity: O(1)
    - Constant extra space
    - No DP array, only rolling variables


**/
function rob(nums: readonly number[]): number {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    // prevMax = max money robbed up to house i - 2
    // currentMax = max money robbed up to house i - 1
    let prevMax: number = nums[0];
    let currentMax: number = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
        const current = Math.max(
            currentMax,           // skip current house
            nums[i] + prevMax  // rob current house
        );

        prevMax = currentMax;
        currentMax = current;
    }

    return currentMax;
}
