/**
  1249. Minimum Remove to Make Valid Parentheses
 
 Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
 

Constraints:

1 <= s.length <= 105
s[i] is either'(' , ')', or lowercase English letter.

**/


/**
 * Two iterations approach
 * Step 1: Initialize openParenthesis and resultWithValidClose
 * Step 2: First iteration, to remove invalid closed parenthesis
 * Step 3: If open brace is found, increase the counter of openParenthesis
 * Step 4: If close is found before open occurs, continue the loop (Do not add chars to the result array)
 * Step 5: If close if found after the open, decrease openParenthesis counter
 * Step 6: Else push the current character to the result array
 * Step 7: If open counter is zero, then it means the result array have valid characters, so return joining the array
 * Step 8: If found any number of openParenthesis after first iteration, then do Second iteration to remove open parenthesis by iterating reverse
 * Step 9: Final result will be in reversed, so before returning, reverse and join the array
 */
var minRemoveToMakeValid = function(s) {
    let resultWithValidClose = [];
    let openParenthesis = 0;
    
    for (let count = 0; count < s.length; count ++) {
        if (s[count] === '(') openParenthesis ++;
        else if (s[count] === ')') {
            if (openParenthesis === 0) continue;
            openParenthesis --;
        }
        resultWithValidClose.push(s[count]);
    }
    
    if (openParenthesis) {
        let result = [],
            closeParenthesis = 0;

        for (let count = resultWithValidClose.length - 1; count >= 0; count --) {
            if (resultWithValidClose[count] === ')') closeParenthesis ++;
            else if (resultWithValidClose[count] === '(') {
                if (closeParenthesis === 0) continue;
                closeParenthesis --;
            }
            result.push(resultWithValidClose[count]);
        }

        return result.reverse().join('');
    }
    else {
        return resultWithValidClose.join('');
    }
};
