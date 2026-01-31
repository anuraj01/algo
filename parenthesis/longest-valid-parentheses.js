/**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.


Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.


**/

/**
 * Solved by using Forward and Backward iteration technique
 * Step 1: Initial values, keep track of max, no of open and close found
 * Step 2: For both iteration, increase count of openFound and closeFound if corresponding braces are found
 * Step 3: Whenever openFound is equal to closeFound, update the max (DO NOT RESET THE COUNTERS)
 * Step 4: For Forward iteration, reset the counter when closeFound > openFound
 * Step 5: For Backward iteration, reset the counter when openFound > closeFound
 * Step 6: Final maxFound will have the result
 */
var longestValidParentheses = function(s) {
    let maxFound = 0,
        openFound = 0, 
        closeFound = 0;
    
    for (let count = 0; count < s.length; count ++) {
        if (s[count] === '(') openFound ++;
        else closeFound ++;
        
        if (openFound === closeFound) maxFound = Math.max(maxFound, openFound + closeFound);
        else if (closeFound > openFound) {
            openFound = 0;
            closeFound = 0;
        }
    }
    
    openFound = 0;
    closeFound = 0;
    for (let count = s.length - 1; count >= 0; count --) {
        if (s[count] === ')') closeFound ++;
        else openFound ++;
        
        if (openFound === closeFound) maxFound = Math.max(maxFound, openFound + closeFound);
        else if (openFound > closeFound) {
            openFound = 0;
            closeFound = 0;
        }
    }
    
    return maxFound;
};

longestValidParentheses("(()"); // 2

/**
 TS based & Stack approach
  - With stack it can be done with single iteration
  - Stack stores indices of unmatched parenthesis
  - Top of stack is index of last invalid position
  - stack[stack.length - 1] is the index just before the start of valid substring
  - why subtract?
     - Because substring is (endIndex - stackTop)

   Complexity
    - Time and Space o(n)
**/
function longestValidParentheses(s: string): number {
    let maxLen = 0;
    const stack: number[] = [-1]; // base index, as nothing is invalid before start

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();

            if (stack.length === 0) {
                stack.push(i); // new base
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
}

