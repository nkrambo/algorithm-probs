
/**
* Minimum Unique Word Abbreviation
*
* Tags: Bit Manipulation, Backtracking
* Leetcode: 411
*
* A string such as 'word' contains the following abbreviations:
*
* ['word', '1ord', 'w1rd', 'wo1d', 'wor1', '2rd', 'w2d', 'wo2', '1o1d', '1or1', 'w1r1', '1o2', '2r1', '3d', 'w3', '4']
*
* Given a target string and a set of strings in a dictionary, find an abbreviation
* of this target string with the smallest possible length such that it does not
* conflict with abbreviations of the strings in the dictionary.
*
* Each number or letter in the abbreviation is considered length = 1. For example,
* the abbreviation 'a32bc' has length = 4.
*
* Note:
*
* In the case of multiple answers as shown in the second example below, you may
* return any one of them.
*
* Assume length of target string = m, and dictionary size = n. You may assume that
* m ≤ 21, n ≤ 1000, and log2(n) + m ≤ 20.
*
* Example 1:
*
* Input: 'apple', ['blade']
* Output: 'a4'
* '5' or '4e' conflicts with 'blade'
*
* Example 2:
*
* Input: 'apple', ['plain', 'amber', 'blade']
* Output: '1p3'
* Other valid answers include 'ap3', 'a3e', '2p2', '3le', '3l1'
*
* Time: O(1)
* Space: O(1)
*
* @param {number} num 32-bit unsigned integer
* @return {number} Returns the reversed of num
*/

// function minAbbreviation(target, dictionary) {
//
// }
//
// export default minAbbreviation;
