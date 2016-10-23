
/**
* Reverse Linked List
*
* Write a function for reversing a linked list. Do it in-place.
*
* Your function will have one input: the head of the list; and should return the
* new head of the list.
*
* Here's a sample linked list node class:
*
* function LinkedListNode(value) {
*   this.value = value;
*   this.next = null;
* }
*/

/**
* reverseLinkedList()
*
* Solution:
*
* Our first thought might be to build our reversed list 'from the beginning',
* starting with the head of the final reversed linked list.
*
* The head of the reversed list will be the tail of the input list. To get to
* that node we'll have to walk through the whole list once (O(n) time). And that's
* just to get started.
*
* This is inefficient. We can reverse the list with just one walk from head to tail.
*
* We do this by changing the next pointer of each node to the previous node.
*
* In one pass from head to tail of our input list, we point each node's next pointer
* to the previous item.
*
* The order of operations is important here! We're careful to copy current.next
* into next before setting current.next to previous. Otherwise 'stepping forward'
* at the end could actually mean stepping back to previous!
*
* We return previous because when we exit the list, current is null. Which means
* that the last node we visited—previous—was the tail of the original list, and
* thus the head of our reversed list.
*
* Keep in mind, this in-place reversal destroys the input linked list.
*
* Time: O(n)
* Space: O(1)
* We pass over the list only once, and maintain a constant number of variables in memory.
*
* @param {object} list linked list to reverse
* @return {object} returns the same modified list in-reverse
*/

function reverseLinkedList(list) {
  let current  = list.head;
  let previous = null;
  let nextNode = null;

  // until we have 'fallen off' the end of the list
  while (current) {
    // copy a pointer to the next element
    // before we overwrite current.next
    nextNode = current.next;

    // reverse the 'next' pointer
    current.next = previous;

    // step forward in the list
    previous = current;
    current = nextNode;
  }

  // nest our return in a head and add the length property back
  return {
    head: previous,
    length: list.length
  };
}

export default reverseLinkedList;
