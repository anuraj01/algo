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
