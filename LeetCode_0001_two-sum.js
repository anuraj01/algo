/**
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
    
    Example 1: 
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
 */


/**
 * Step 1 : Iterate over the number array length
 * Step 2 : Subtract the current number with target to identify which number to be added to get required target value
 * Step 3 : Find indexof that required number and if index matches
 *                       (or)
 * Step 3 : Alternatively instead of finding index (as index itself is considered as one iteration), store the current number in a map or an object
 * Step 4 : on next iteration, find req number to be added from step 2 and lookup from the object or map (Lookup is much more faster than indexOf)
 * Step 5 : If found, return the array of count and lookup number
 *
 *
 */

var twoSum = function(nums, target) {
    let result = [];
    for (let count = 0; count < nums.length; count ++) {
      
      // Check for which number to be added to get the required result
        let numToBeAdded = target - nums[count];
      // Find the index if number found
        let indexFound = nums.indexOf(numToBeAdded);
        
      //Check for index doesnt match with current index and -1 and return the result
        if (indexFound !== -1 && indexFound !== count) {
            result = [count, indexFound];
            return result;
        }
    }
    
    return result;
};

// using plain object to replace IndexOf, so that internal Iteration can be avoided
var twoSum_usingObj = function(nums, target) {
    let indexFinder = {};
    for(let count = 0; count < nums.length; count ++) {
        let numToBeAdded = target - nums[count];
        if (typeof indexFinder[numToBeAdded] !== 'undefined') {
            return [count, indexFinder[numToBeAdded]]
        }
        indexFinder[nums[count]] = count;
    }
    
    return [0, 1];
};

/**
using map to replace IndexOf, so that internal Iteration can be avoided
    Time Complexity:
        - O(n) — single pass through the array; Map operations are O(1) average.
    Space Complexity:
        - O(n) — the Map can store up to n elements.
**/
function twoSumUsingMap(nums: readonly number[], target: number): [number, number] {
  const indexByValue = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    const matchIndex = indexByValue.get(complement);
    if (matchIndex !== undefined) {
      return [matchIndex, i];
    }

    indexByValue.set(nums[i], i);
  }

  throw new Error("No valid two-sum solution exists");
}


twoSum([2,7,11,15], 9)
