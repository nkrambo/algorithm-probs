
/**
 * StackOfStacks uses multiple smaller stacks to hold values. New stacks are
 * created or dropped as required. popAt allows for an item to be popped from
 * any stack, when that occurs items from subsequent stacks are taken and moved
 * forward in the list of stacks so that there are no gaps.
 *
 * N = total number of items
 * M = size of smaller stack
 * Time: push O(1), pop O(1), popAt O(N)
 * Additional space: push O(1), pop O(1), popAt O(M)
 */

 class StackOfPlates {
  constructor(capacity) {
    if (capacity === undefined) {
      throw new Error('StackOfStacks: capcity is a required parameter.');
    }
    this.stacks = [[]];
    this.capacity = capacity;
  }

  push(value) {
    if (this.stacks[this.stacks.length - 1].length >= this.capacity) {
      this.stacks.push([]);
    }
    this.stacks[this.stacks.length - 1].push(value);
  }

  pop() {
    const value = this.stacks[this.stacks.length - 1].pop();
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(number) {
    if (number < 1 || number > this.stacks.length) {
      throw new Error('Stack number is invalid');
    }

    if (number === this.stacks.length) {
      return this.pop();
    }

    const value = stack.pop();
    const tempStack = [];
    let stack = this.stacks[number - 1];
    let nextStack;

    // move items from subsequent stacks forward to fill the gap
    if (number < this.stacks.length) {
      for (let i = number; i < this.stacks.length; ++i) {
        nextStack = this.stacks[i];

        // reverse next stack - we could actually use other operators in
        // JavaScript like shift or reverse to do this simpler but that would
        // be cheating
        while (nextStack.length > 0) {
          tempStack.push(nextStack.pop());
        }
        stack.push(tempStack.pop());
        while (tempStack.length > 0) {
          nextStack.push(tempStack.pop());
        }
        stack = nextStack;
      }
    }

    // drop any empty stacks at the end beyond the first one
    if (this.stacks.length > 1 && this.stacks[this.stacks.length - 1].length === 0) {
      this.stacks.pop();
    }

    return value;
  }
}

export default StackOfPlates;