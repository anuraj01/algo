/**
      1143. Longest Common Subsequence
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
 

Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.

**/

/**
 * DP problem - Construct 2D dp array to hold all longest subsequence
 * Step 1: Construct a 2D dp[], with text1.length + 1 rows and text2.length + 1 columns and fill everything as zero
 *         length + 1 is to mainly avoid condition check for array out of bounds exception for first iteration
 * Step 2: check for diagonal character match, if so add 1 with adjacent top left diagonal value
 *         Iterating from i and j as 1 as initializer, text1[i-1] is check for first character
 * Step 3: If diagonal is mismatched, Check for adjacent values and fill the max
 *         adjacent top and adjacent left are adjacent values and by this, the dp array holds longest subsequence value till the iteration
 * Step 4: Then final bottom right value of dp array holds the result
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = [];
    for(let i = 0; i <= text1.length;i++) {
        dp.push(new Array(text2.length+1).fill(0));
    }
    for(let i = 1; i <= text1.length;i++) {
        for(let j = 1; j <= text2.length;j++) {
            if(text1[i-1] == text2[j-1]) {
                    dp[i][j] = dp[i-1][j-1]+1;
            }
            else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[text1.length][text2.length];
};

longestCommonSubsequence("abcde", "ace"); // 3


/**

The index position (3, 3) means the longest subsequence found for the value "abc" and "ace" i.e. 2 ("ac"), similarly it goes on
          ( )    (a)   (c)   (e)  
           0      1     2     3    
        -------------------------
  ( ) 0 |   0     0     0     0
  
  (a) 1 |   0     1     1     1
  
  (b) 2 |   0     1     1     1
  
  (c) 3 |   0     1     2     2
  
  (d) 4 |   0     1     2     2
  
  (e) 5 |   0     1     2     3



**/
