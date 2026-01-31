/**
    Given a string s, find the length of the longest substring without repeating characters.
    
    Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
    
    Example 2: 
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1
    
 */

/**
 * -- SLIDING WINDOW APPROACH --
 * TIP : For loop may not be suitable, as we need to traverse again to previous position to identify next unique characters, so use While loop
 * Step 1 : Have a unique array
 * Step 2 : Add a characters one by one until we get a duplicate in that unique array
 * Step 3 : Find max length always when we add value to the unique array
 * Step 4 : If duplicate found, remove characters from begenning of unique array until we remove that duplicate entry from first occurence
 * Step 5 : Do not increment index when removing item from first position from step 4
 * Step 6 : As max length is always max of current max and unique length, after all iteration, max will have the result we needed
 *
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0 || s.length === 1) {
        return s.length;
    }
    
    let max = 0, indexTraversed = 0;
    let uniqueFound = [];
    
    /**
     * Add characters one by one until we find a duplicate, find max always
     * Once duplicate found, then remove charaters from beginning from uniqueArray until duplicate char gets removed from start position
     */
    while (indexTraversed < s.length) {
        // until we find duplicate
        if (uniqueFound.indexOf(s[indexTraversed]) === -1) {
            uniqueFound.push(s[indexTraversed]);
            max = Math.max(max, uniqueFound.length);
            indexTraversed ++;
        }
        // If found duplicate, remove char from begenning until we get duplicate position
        else {
            uniqueFound.shift()
        }
    }
    return max;
};

lengthOfLongestSubstring("abcabcbb")


// ts based - sliding window
//as shift and indexOf are already O(n)
/**
    Key Point
     - right only moves forward
     - Each character is processed at most twice (add + remove)
     - We detected a duplicate character
     - The window is now invalid
     - We shrink from the left until the duplicate is removed
     - Why while, not if?
        - Because:
            -The duplicate might appear multiple positions back
            - We must fully restore the invariant: no duplicates
**/
function lengthOfLongestSubstring(s: string): number {
    let charSet = new Set<string>();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // If duplicate found, shrink window from left
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/**
At first glance, it looks like it could run up to n times per right → O(n²)?
BUT each character is added and removed from the set at most once
 - charSet.add() → max n times
 - charSet.delete() → max n times
✅ So total operations inside the while loop across the whole string = O(n)

Space Complexity: O(min(n, charset))
 - n → string length
 - charset → total possible unique characters


The while loop looks scary, but each character is touched at most twice, so overall linear.
The Set size is only as big as the current window of unique characters.


Input: "abcabcbb"

right	char	charSet	    left	window	maxLength
0	    a	    {a}	        0	    a	    1
1	    b	    {a,b}	    0	    ab	    2
2	    c	    {a,b,c}	    0	    abc	    3
3	    a	    {b,c,a}	    1	    bca	    3
4	    b	    {c,a,b}	    2	    cab	    3
5	    c	    {a,b,c}	    3	    abc	    3
6	    b	    {a,c,b}	    4	    cb	    3
7	    b	    {b}	        7	    b	    3

✅ Final maxLength = 3
**/
