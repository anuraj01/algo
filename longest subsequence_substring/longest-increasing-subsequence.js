/**
    300. Longest Increasing Subsequence
    
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

 

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:

Input: nums = [7,7,7,7,7,7,7]
Output: 1
 

Constraints:

1 <= nums.length <= 2500
-104 <= nums[i] <= 104
**/

/**
 * Brute force, use dp to store value for each element
 * Step 1: Initialize dp array of length nums.length and fill with 1 as default
 * Step 2: Iterate from second index, as we need to compare from first index via brute force
 * Step 3: Brute force the iteration till i, as dp array holds longest subsequence till that index value
 * Step 4: Check if value of i is greater than j and increment counter accordingly, keeping max value in cell always
 * Step 5: Have a variable max to hold max value of entire DP always and this is the result
 */
var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1),
        max = 1;
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        max = Math.max(dp[i], max);
    }
    
    return max;
};

lengthOfLIS([10,9,2,5,3,7,101,18]); // 4

/**
    0   1   2   3   4   5    6     7  
    10  9   2   5   3   7   101   18
    
    1   1   1   2   2   3    4    4
**/
// TS
function lengthOfLIS(nums: number[]): number {
  const n = nums.length;
  const dp: number[] = new Array(n).fill(1);

  let maxLen = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLen = Math.max(maxLen, dp[i]);
  }

  return maxLen;
}

/**
    Complexity
        Time: O(n²) → n ≤ 2500 is fine
        Space: O(n)
**/
