/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
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

// using map to replace IndexOf, so that internal Iteration can be avoided
var twoSum_usingMap = function(nums, target) {
    let indexFinder = new Map();
    for(let count = 0; count < nums.length; count ++) {
        let numToBeAdded = target - nums[count];
        if (indexFinder.has(numToBeAdded)) {
            return [count, indexFinder.get(numToBeAdded)]
        }
        indexFinder.set(nums[count], count);
    }
    
    return [0, 1];
};


twoSum([2,7,11,15], 9)
