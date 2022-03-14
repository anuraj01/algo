/**
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

{ { } [ ] [ [ [ ] ] ] } is VALID expression
[ [ [ ] ] ]             is VALID sub-expression
{ } [ ]                 is VALID sub-expression

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'

**/



/**
 * -- STACK BASED APPROACH --
 * Step 1: If length of the string is not even, return false
 * Step 2: Initialize a stack and array of valid opening paranthesis (instead use if condition wilt OR statement '(' || '[' || '{')
 * Step 3: If opening brace found, push it into the stack
 * Step 4: If closing brace '}' is equal to same kind of lastly inserted '{' then pop the last element from stack
 * Step 5: If closing brace is not equal to same kind of lastly inserted, then return false, as this is invalid
 * Step 6: Finally after all the iteration, the stack should be empty for valid paranthesis
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    
    let validOpening = ['(', '[', '{'];
    let paraStack = [];
    
    for (let count = 0; count < s.length; count ++) {
        if (validOpening.indexOf(s[count]) !== -1) {
            paraStack.push(s[count]);
        }
        
        else if(s[count] === ')' && 
                paraStack.length && 
                paraStack[paraStack.length -1] === '(') {
            paraStack.pop();
        }
        
        else if(s[count] === ']' && 
                paraStack.length && 
                paraStack[paraStack.length -1] === '[') {
            paraStack.pop();
        }
        
        else if(s[count] === '}' && 
                paraStack.length && 
                paraStack[paraStack.length -1] === '{') {
            paraStack.pop();
        }
        
        else return false;
    }
    
    return paraStack.length === 0;
};


isValid("()[{}]"); // true
