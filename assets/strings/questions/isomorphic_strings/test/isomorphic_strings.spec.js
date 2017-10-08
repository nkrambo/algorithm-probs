
import { expect } from 'chai';
import isIsomorphic from '../isomorphic_strings';

describe('isIsomorphic()', () => {
  test('should return true if str1 and str2 are isomorphic', () => {
    expect(isIsomorphic('egg', 'add')).to.be.true;
    expect(isIsomorphic('paper', 'title')).to.be.true;
  });

  test('should return false if str1 and str2 are not isomorphic', () => {
    expect(isIsomorphic('foo', 'bar')).to.be.false;
  });

  test('should return false if str1 and str2 are different lengths', () => {
    expect(isIsomorphic('foo', 'barrr')).to.be.false;
  });
});
