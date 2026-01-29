Pattern
---------
- Initialize
    - prevMax is firstValue
    - currentMax is max of first and second value
- On next iteration
    - Current will hold the max of
        - currentMax (Skip current house) or
        - prevMax + currentValue (rob current house)
    - Now interchange prevMax to currentMax
    - And currentMax always hold max currentMax -> current
- For circular
    - Do the above with 2 function calls
    - Exclude last house (0 to n-2) -> n is index so last house is n-1 and we are excluding it
    - Exclude fitst house (1 to n-1)
    - Find max of both
 - For binary
     - If I rob this node, children must be skipped
     - If I skip this node, children choose best option
     - dfs function returns [robCurrent, skipCurrent]
     - Recurse for each node
         const [leftRob, leftSkip] = dfs(node.left);
         const [rightRob, rightSkip] = dfs(node.right);
     - robCurrent is currentNode + leftSkip + rightSkip
     - skipCurrent is best option of (leftRob, leftSkip) + (rightRob, rightSkip)
 
Key points
-----------
The circular dependency exists only between the first and last house.

Break that dependency by removing one of them, solve the linear problem, and take the best result.
