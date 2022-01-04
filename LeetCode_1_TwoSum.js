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


twoSum([2,7,11,15], 9)
