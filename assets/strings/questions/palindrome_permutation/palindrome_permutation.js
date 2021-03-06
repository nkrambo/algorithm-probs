
/**
* Palindrome Permutation
*
* Tags: Map, String
* Leetcode: 266
*
* Given a string, determine if a permutation of the string could form a palindrome.
*
* Example 1:
*
* Given: 'code'
* Return: false
*
* Example 2:
*
* Given: 'aab'
* Return: true
*
* Example 3:
*
* Given: 'carerac'
* Return: true
*/

/**
* isPalidromePermutation()
*
* Solution:
*
* To solve this, we have to consider some of the properties of a valid palindrome.
* For a word to be written the same ways forward as backwards, there needs
* to be the same characters in the first half as there are in the last half.
*
* For example, 'noon' is a palindrome with ['n', 'o'] in both the first and last half
* of the word. All palindromes have this property.
*
* Therefore, for each character in the first half, there must be a 'balancing' equivalent
* in the second half.
*
* There is one exemption of this. That's for a single middle character that separates the
* first and last halfs. This does not need to balance. For example, 'dad', is a palindrome
* where the 'd's are balanced and the 'a' is a single instance 'unbalanced' character.
*
* Because the question is asking us to recognise any permutation of a palindrome, we do not
* have to concern ourselves with the order of characters in the string, in this case.
* We only need to make sure the string meets these other properties.
*
* We can do this with a set().
*
* We iterate over the string and for each character, either add to the set,
* representing 'unbalanced', or we delete from the set, representing 'balanced'.
*
* After iteration, the size of the set should not be larger than 1, which represents
* the 1 unbalanced middle character that may, or may not, be present.
*
* Time: O(n)
* Space: O(n)
*
* Where n is the length of the string input.
*
* @param {string} s string of n length
* @return {boolean} returns true if the string is a permutation of a palindrome, otherwise false.
*/

function canPermutePalindrome(s) {
  // use a set to balance characters
  const chars = new Set();
  for (const char of s) {
    // delete if present
    if (chars.has(char)) {
      chars.delete(char);

    // otherwise add
    } else {
      chars.add(char);
    }
  }

  return chars.size <= 1;
}

export default canPermutePalindrome;
