
import { expect } from 'chai';
import bubbleSort from '../bubble_sort';

describe('bubbleSort()', () => {
  test('should return a new sorted array', () => {
    expect(bubbleSort([4, 3, 7, 1, 2, 5, 9])).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
    expect(bubbleSort([3, 5, 3, 3, 5])).to.deep.equal([3, 3, 3, 5, 5]);
  });
});
