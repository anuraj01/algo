/**

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.


**/

/**
 * Problem solved with DP, so as per DP template, fill first 2 values and then calculate remaining
 * Here we use 2D array to hold the value, whether the substring is palindrome or not
 * Step 1: First fill the diagonal element to 'Y' as always single character is a valid palindrome (0,0) (1,1) (2,2) ...
 * Step 2: Then fill the second diagonal as 'Y' only when both the values are equal (0,1) (1,2) (2,3)...
 * Step 3: Now DP logic comes into picture, iterate and fill the third, fourth,... columns and check the below condition
 * Step 4: Fill value to 'Y' only when index characters are equal and middle formed substring is already a palindrome
 *        i.e if 'cbbc' is the string, check the outer most values, if s[i] === s[j] and b/w values 'bb' is a palindrome (which is already calculated and filled in matrix)
 *        so the second condition is increment i counter by one and decrement j counter by 1, dp[i + 1][j -1] === 'Y'
 * Step 5: Whenever Y is being filled, calculate maxLength and if maxLength is found, store the substring values
 * Step 6: At the end of iteration, the stored substring value have the index of max palindrome string
*/
var longestPalindrome = function(s) {
    if (s.length === 1) return s;
    if (s.length === 2) return s[0] === s[1] ? s : s[0];
  
    let maxLength = 0;
    let dp = [];
    let substrValue = [0, 0];
    
    const fillMatrix = (increment, s, dp) => {
        let iterationLength = s.length - increment;
        let j = increment;
        for (let i = 0; i < iterationLength; i++, j++){
            if (!increment) {
                dp[i] = [];
              // Filling first diagonal to 'Y'
                dp[i][j] = 'Y';
            }
            else if (increment === 1) {
              // Fill second diagonal to Y only if they are equal
                if (s[i] === s[i + 1]) {
                    dp[i][i + 1] = 'Y';
                    substrValue = [i, i + 2];
                }
            }
            else if (s[i] === s[j] && dp[i + 1][j - 1] === 'Y') {
                dp[i][j] = 'Y';
                 if (maxLength < (j - i)) {
                    maxLength = j - i;
                    substrValue = [i, j + 1];
                }
            }
        }

    }
    
    for (let i = 0; i < s.length; i ++) {
        fillMatrix(i, s, dp);
    }

   return s.substring(...substrValue) || s[0];
};



/**

Matrix formation looks like 
        cbcb  => bcb
        (c) (b) (c) (b) 
        0   1   2   3  
        --------------
0 (c)   Y       Y    
1 (b)       Y   Y   
2 (c)           Y   
3 (b)               Y


fillMatrix iteration logic

Iter-1      Iter-2    Iter-3    Iter-4  Iter-5  Iter-6 ....
0, 0        0, 1       0, 2     0, 3    0, 4    0, 5
1, 1        1, 2       1, 3     1, 4    1, 5
2, 2        2, 3       2, 4     2, 5
3, 3,       3, 4       3, 5
4, 4        4, 5
5, 5



**/
longestPalindrome("cbcb")
