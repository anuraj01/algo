/**
    409. Longest Palindrome
    
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Example 3:

Input: s = "bb"
Output: 2
 

Constraints:

1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.

**/


/**
 *  -- Even number of item is valid palindrome and one odd can be considered as palindrome --
 * Step 1: Initialize Map or an Object for lookup 
 * Step 2: In no value found in lookup (initial and for odd count), just initialize the value as 1
 * Step 3: For even increase result counter to 2 and delete the item
 * Step 4: Finally if the lookup have any value, just add one to the result
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;
    let lookup = new Map(),
        result = 0;
    for (let count = 0; count < s.length; count ++) {
        let lookupFound = lookup.get(s[count]) || 0;
        if (lookup.get(s[count])) {
            lookup.delete(s[count])
            result = result + 2;
        }
        else {
            lookup.set(s[count], 1)
        }
    }
    if (lookup.size > 0) {
        result = result + 1;
    }
    return result;
};


/**
 * Step 1: Same as above, but initially building the lookup alone with counter in it
 * Step 2: Finally iterate the counter
 * Step 3: Result is all even counter and one odd if exists
 */
var longestPalindrome = function(s) {
    if (s.length === 1) return 1;
    let lookup = new Map(),
        result = 0,
        isOddFound = false;
    for (let count = 0; count < s.length; count ++) {
        let lookupFound = lookup.get(s[count]) || 0;
        lookup.set(s[count], lookupFound + 1);
    }
    
    for (item of lookup) {
        if (!item[1]) continue;
        
        let remainder  = item[1] % 2;
        if (remainder === 0) {
            result = result + item[1];
        }
        else {
            result = result + item[1] - 1;
            if (!isOddFound) {
                result = result + 1;
                isOddFound = true;
            }
        }
    }
    return result;
};
