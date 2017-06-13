
/**
* Android Unlock Patterns
*
* Tags: Dynamic Programming, Backtracking
* Leetcode: 351
*
* Given an Android 3 x 3 key lock screen and two integers m and n,
* where 1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android
* lock screen, which consist of minimum of m keys and maximum n keys.
*
* Rules for a valid pattern:
*
* 1. Each pattern must connect at least m keys and at most n keys.
*
* 2. All the keys must be distinct.
*
* 3. If the line connecting two consecutive keys in the pattern passes through
*    any other keys, the other keys must have previously selected in the pattern.
*    No jumps through non selected key is allowed.
*
* 4. The order of keys used matters.
*
* Explanation:
*
*   | 1 | 2 | 3 |
*   | 4 | 5 | 6 |
*   | 7 | 8 | 9 |
*
* Invalid move: 4 - 1 - 3 - 6
* Line 1 - 3 passes through key 2 which had not been selected in the pattern.
*
* Invalid move: 4 - 1 - 9 - 2
* Line 1 - 9 passes through key 5 which had not been selected in the pattern.
*
* Valid move: 2 - 4 - 1 - 3 - 6
* Line 1 - 3 is valid because it passes through key 2, which had been selected in the pattern
*
* Valid move: 6 - 5 - 4 - 1 - 9 - 2
* Line 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.
*
* Example:
* Input: 1, 1
* Output: 9
*/

/**
* numberOfPatterns()
*
* Solution:
*
* Time: O(1)
* Space: O(1)
*
* @param {number} m where 1 ≤ m ≤ n ≤ 9
* @param {number} n
* @return {number} returns the number of possible unlock patterns
*/

// function numberOfPatterns(m, n) {
//
// }
//
// export default numberOfPatterns;
