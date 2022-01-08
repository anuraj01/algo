/**
 * @param {string} s
 * @return {number}
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
