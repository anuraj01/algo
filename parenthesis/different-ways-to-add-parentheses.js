/**
  241. Different Ways to Add Parentheses
 
 Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

 

Example 1:

Input: expression = "2-1-1"
Output: [0,2]
Explanation:
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: expression = "2*3-4*5"
Output: [-34,-14,-10,-10,10]
Explanation:
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
 

Constraints:

1 <= expression.length <= 20
expression consists of digits and the operator '+', '-', and '*'.
All the integer values in the input expression are in the range [0, 99].

**/


/**
 * Recursion, Divide and Conquer
 * Step 1: Iterate over the expression string until we find an expression (+, -, *)
 * Step 2: Once we get expression, split into left and right part and recurse both part
 * Step 3: When an expression string doesn't have expression, return the expression string (means that is an integer)
 * Step 4: When expression found, do the computing part for each operation with left and right
 * Step 5: Always left and right holds value of integer and char holds expression (+, -, *)
 * Step 6: And all possible result will get pushed to the result array
 *
 */
var diffWaysToCompute = function(expression) {
    if(!expression.length) return [0];
    const result = [];
	
    for(let idx = 0; idx < expression.length; idx++) {
        const char = expression[idx];
        if(char === "+" || char === "-" || char === "*") {
			      //recurse
            const left = diffWaysToCompute(expression.substring(0, idx));
            const right = diffWaysToCompute(expression.substring(idx + 1));
            //compute
            for(let leftVal of left) {
                for(let rightVal of right) {
                   switch(char) {
                      case "+":  
                        result.push(parseInt(leftVal) + parseInt(rightVal)); 
                       break;
                      case "-": 
                        result.push(parseInt(leftVal) - parseInt(rightVal)); 
                        break;
                      default: 
                       result.push(parseInt(leftVal) * parseInt(rightVal)); 
                       break;
                   } 
                }
            }  
        }
    }
    if(!result.length) return [expression]; // to return the integer when no expression found
    return result
};
