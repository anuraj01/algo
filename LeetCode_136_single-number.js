/*
  Given a non-empty array of integers nums
  You must implement a solution with a linear runtime complexity and use only constant extra space.
  
  Example 1:
  Input: nums = [2,2,1]
  Output: 1
  
  Example 2: 
  Input: nums = [4,1,2,1,2]
  Output: 4
*/


/**
 * TIPS: XOR operator
 *  - XOR of a number with itself is 0
 *  - XOR of a number with 0 is number itself
 * Step 1 : Iterate over using map or for each or normal for loop
 * Step 2 : Do XOR operation with each entries
 * Step 3 : XOR with number itself will nullify and result will have a unique number
 *                    (OR)
 * Step 2 : Check indexOf === lastIndexOf with each and return when it is true, ie return nums.indexOf(a) === nums.lastIndexOf(a)
 *
 */

var singleNumber = function(nums) {
    let singleNumber = 0;
    nums.map(a => singleNumber ^= a);
    return singleNumber;
};

singleNumber([4,1,2,1,2])
