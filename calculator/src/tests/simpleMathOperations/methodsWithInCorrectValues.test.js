import { expect } from 'chai';
import { sum, divide, multiply, subtract } from '../../utils/actions.js';

const mathOperations = [sum, divide, multiply, subtract];

describe('Use for loop to check every of math operation with incorrect input values', () => {
  for (const method of mathOperations) {
    it('test with incorrect values for fist and second function inputs', () => {
      expect(method(100, [])).to.be.undefined;
      expect(method()).to.be.undefined;
      expect(method({ name: 'Kiril', age: 32 }, {})).to.be.undefined;
      expect(method({})).to.be.undefined;
      expect(method(null)).to.be.undefined;
      expect(method([], [])).to.be.undefined;
      expect(method('20', [])).to.be.undefined;
      expect(method([], '')).to.be.undefined;
      expect(method('', '')).to.be.undefined;
      expect(method('')).to.be.undefined;
      expect(method([], '')).to.be.undefined;
      expect(method(undefined)).to.be.undefined;
      expect(method(120, undefined)).to.be.undefined;
      expect(method(null, null)).to.be.undefined;
      expect(method(20, null)).to.be.undefined;
      expect(divide('10', '-30        ')).to.be.undefined;
    });
  }
});
