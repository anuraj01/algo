/**
Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

*/



/**
 * We use TWO POINTER approach
 * Step 1: We keep track of pointer positions (a_pointer, b_pointer) and max height for each pointer (a_max, b_max)
 * Step 2: If height of a_pointer is less than height of b_pointer
 *          - if current a_pointer height is greater than or equal to a_max height, update a_max
 *          - Else it means there is a space for water and so add the height to the result (a_max - height[a_pointer])
 * Step 3: same as above, do it for right pointer
 * Step 4: Now the result holds the expected value
 */
var trap = function(height) {
    let a_pointer = 0,
        b_pointer = height.length -1,
        a_max = 0,
        b_max = 0,
        result = 0;
    
    while (a_pointer < b_pointer) {
        if (height[a_pointer] < height[b_pointer]) {
            if (height[a_pointer] >= a_max) {
                a_max = height[a_pointer];
            }
            else {
                result += (a_max - height[a_pointer]) 
            }
            a_pointer ++;
        }
        else {
            if (height[b_pointer] >= b_max) {
                b_max = height[b_pointer];
            }
            else {
                result += (b_max - height[b_pointer]) 
            }
            b_pointer --;
        }
        
    }
    
    return result;
};
