/*
https://leetcode.com/problems/container-with-most-water/description/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/


/**
 * We use TWO POINTER approach
 * Step 1: Have 2 pointers, a_pointer from left most and b_pointer from right most
 * Step 2: if value of b_pointer is bigger than a_pointer, then calculate area with smallest height (a_pointer) and distance (b_pointer - a_pointer)
 * Step 3: Similarly, if a_pointer is bigger, then calculate area with (b_pointer * (b_pointer-a_pointer))
 * Step 4: Keep track of max area always and final max area holds the result
 */
var maxArea = function(height) {
    let a_pointer = 0,
        b_pointer = height.length - 1,
        max_area = 0;
    
    while (a_pointer < b_pointer) {
        if (height[a_pointer] < height[b_pointer]) {
            max_area = Math.max(max_area, height[a_pointer]*(b_pointer - a_pointer));
            a_pointer ++;
        }
        else {
            max_area = Math.max(max_area, height[b_pointer]*(b_pointer - a_pointer));
            b_pointer --;
        }
    }
    
    return max_area;
};


/**
 TS based

 Key point
  - The area is always limited by the shorter of the two lines.
  - Therefore, moving the taller line cannot improve the area, because the shorter line still limits it.
  
 Time Complexity: O(n)
    - Each pointer moves inward at most n times
    - Single pass through the array
Space Complexity: O(1)
    - Constant extra space
    - No auxiliary data structures

**/
function maxArea(height: readonly number[]): number {
    if (height.length < 2) {
        return 0;
    }

    let left: number = 0;
    let right: number = height.length - 1;

    let maxArea: number = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = minHeight * width;

        if (currentArea > maxArea) {
            maxArea = currentArea;
        }

        // Move the pointer limiting the area
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
