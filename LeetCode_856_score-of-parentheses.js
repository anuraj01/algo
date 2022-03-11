/**
Given a balanced parentheses string s, return the score of the string.

The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:
Input: s = "()"
Output: 1

Example 2:
Input: s = "(())"
Output: 2

Example 3:
Input: s = "()()"
Output: 2
 
Example 4:
Input: s = "(((())))"
Ouptut: 8

Constraints:

2 <= s.length <= 50
s consists of only '(' and ')'.
s is a balanced parentheses string.

*/


/**
 * Step 1: Initialize result and balance as zero
 * Step 2: Increase balance counter when seeing open brace '('
 * Step 3: Decrease baance counter when seeing close brace ')'
 * Step 4: On seeing close brace, check whether you see open brace previous, if so add result with 2**balance
 *          - if we get only once valid parenthesis '()', then result is 0 + 2**0 = > 1
 *          - If we get brace inside brace '((()))' , then result is  0 + 2**3 => 8
 */
var scoreOfParentheses = function(s) {
    let result = 0, balance = 0;
    for (let count = 0; count < s.length; count ++) {
        if (s[count] === '(') balance ++;
        else {
            balance --;
            if (s[count - 1] === '(') {
                result = result + (2 ** balance);
            }
        }
    }
    
    return result;
};

/*
var scoreOfParentheses = function(s) {
  let score = 0;
    let parenthesisStack = [];
    for (let count = 0; count < s.length; count ++) {
        if (s[count] === '(') {
            parenthesisStack.push(score);
            score = 0;
        }
        else {
            score = parenthesisStack.pop() + Math.max(2*score, 1);
        }
    }
    return score;
}
*/
