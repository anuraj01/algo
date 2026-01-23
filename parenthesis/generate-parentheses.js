/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

/**
 * Backtracking algorithm
 * Step 1: Write a backtrackingFunction which accepts (stringFormed, numOfOpeningBraces, numOfClosedBraces, result, n)
 * Step 2: Return the result after pushing to result array if length is equal to max (Number of pairs formed => n*2)
 * Step 3: First ** IF ** condition, add OPEN paranthesis '(' only if numOfOpeningBraces is less than number of paranthesis pair to be formed
 * Step 4: Pass all same arguements to same backtracking function, with incrementing numOfOpenBraces by one
 * Step 5: Seconf ** IF ** condition, add CLOSE paranthesis ')' only if numOfClosedBraces is less than number of numOfOpeningBraces
 * Step 6: Pass all same arguements to same backtracking function, with incrementing numOfClosedBraces by one
 * By this, only valid paranthesis will be printed and result will contain all valid paranthesis
 */

/**
    “try → check → undo → try another” pattern is classic backtracking
    Backtracking is almost always implemented using recursion

    Recursion → the technique (how the function calls itself)
    Backtracking → the strategy (how you explore and prune possibilities)
**/

var generateParenthesis = function(n) {
    let result = [];
    printParenthesis("", 0, 0, result, n);
    
    return result;
};

const printParenthesis = (stringFormed, numOfOpeningBraces, numOfClosedBraces, result, n) => {
    if (stringFormed.length === n*2) {
        result.push(stringFormed);
        return;
    }
    
    if (numOfOpeningBraces < n) {
        printParenthesis(`${stringFormed}(`, numOfOpeningBraces+1, numOfClosedBraces, result, n);
    }
    
    if (numOfClosedBraces < numOfOpeningBraces) {
        printParenthesis(`${stringFormed})`, numOfOpeningBraces, numOfClosedBraces+1, result, n);
    }
}
