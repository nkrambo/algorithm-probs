
// Sum Lists

function sumListsReverse(list1, list2) {

  // type check
  if (!(list1 instanceof LinkedList) || !(list2 instanceof LinkedList)) {
    new Error('sumListsReverse: Expects 2 parameters of [object LinkedList].');
  }

  const results = new LinkedList();

  let node1 = list1.head;
  let node2 = list2.head;
  let carry = 0;
  let sum;

  // add up matched nodes
  while (node1 && node2) {
    sum = node1.value + node2.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    results.add(sum, results.length);
    node1 = node1.next;
    node2 = node2.next;
  }

  // get any remaining values
  let node = node1 || node2;

  while (node) {
    sum = node.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    results.add(sum, results.length);
    node = node.next;
  }
  // check for any remainder
  if (carry > 0) results.add(carry, results.length);

  return results;
}


