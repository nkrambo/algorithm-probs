
import { expect } from 'chai';
import heapSort from '../heap_sort';

describe('heapSort()', () => {
  it('should return a new sorted array', () => {
    expect(heapSort([4, 3, 7, 1, 2, 5, 9])).to.deep.equal([1, 2, 3, 4, 5, 7, 9]);
    expect(heapSort([3, 5, 3, 3, 5])).to.deep.equal([3, 3, 3, 5, 5]);
  });
});