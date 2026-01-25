/**
  213. House Robber II
 
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
Example 2:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 3:

Input: nums = [1,2,3]
Output: 3
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 1000
**/

/**
 * Same as house robber 1, but have to do 2 iterations
 * Step 1: Iteration 1 => By excluding last item and including first item
 * Step 2: Iteration 2 => By including last item and excluding first item
 * Step 3: Result is max of iteration 1 and 2
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    const findMax = (nums) => {
        if (nums.length === 1) return nums[0];

        let firstMax = nums[0],
            secondMax = Math.max(nums[0], nums[1]);
        let current = 0;

        for (let count = 2; count < nums.length; count ++) {
            current = Math.max(secondMax, nums[count] + firstMax);
            firstMax = secondMax;
            secondMax = current;
        }

        return secondMax;
    }
    
    let includeFirst = findMax(nums.slice(0, nums.length - 1));
    let excludeFirst = findMax(nums.slice(1));
    
    return Math.max(includeFirst, excludeFirst)
};


/**
 * Same as above, but iterating once
 * Step 1: Initialize 2 sets of variables, one set include first item and exclude last item, other vice versa
 * Step 2: As second set doesn't include first item, take max of 1 and 2 index not 0 and 1
 * Step 3: Inside the iteration, do not do operation on first set when last item is reached
 * Step 4: Similarly inside the iteration, do not do operation on second set for count == 2
 * Step 5: Maximum of secondMax of two sets holds the result
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    else if (nums.length === 2) return Math.max(nums[0], nums[1]);
    
    let firstMax_1 = nums[0],
        secondMax_1 = Math.max(nums[0], nums[1]),
        current_1 = 0;
    
    let firstMax_2 = nums[1],
        secondMax_2 = Math.max(nums[1], nums[2]),
        current_2 = 0;
    
    for (let count = 2; count < nums.length; count ++) {
        if (count !== nums.length - 1) {
            current_1 = Math.max(secondMax_1, nums[count] + firstMax_1);
            firstMax_1 = secondMax_1;
            secondMax_1 = current_1;
        }
        
        if (count !== 2) {
            current_2 = Math.max(secondMax_2, nums[count] + firstMax_2);
            firstMax_2 = secondMax_2;
            secondMax_2 = current_2;
        }
    }
    
    return Math.max(secondMax_1, secondMax_2)
};



var rob = function(nums) {
    if (nums.length === 1) return nums[0];

    const robLinear = (start, end) => {
        let prev2 = 0, prev1 = 0;
        for (let i = start; i <= end; i++) {
            let curr = Math.max(prev1, nums[i] + prev2);
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    };

    return Math.max(
        robLinear(0, nums.length - 2),
        robLinear(1, nums.length - 1)
    );
};
 
