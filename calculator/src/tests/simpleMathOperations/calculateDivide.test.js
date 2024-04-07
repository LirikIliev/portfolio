import { expect } from 'chai';
import { divide } from '../../utils/actions.js';

describe('Test for "multiply" function', function () {
  it('test with correct values for fist and second function inputs', () => {
    expect(divide(100, 0)).to.equal(Infinity);
    expect(divide(2, 3)).to.equal(0.6666666666666666);
    expect(divide(5.5, 5.5)).to.equal(1);
    expect(divide(0, 0)).to.be.NaN;
  });

  it('test with correct values, but negative number inputs', () => {
    expect(divide(-10, 30)).to.equal(-0.3333333333333333);
    expect(divide(30, 10)).to.equal(3);
    expect(divide(10, -30)).to.equal(-0.3333333333333333);
  });

  it('test with correct values, but on type string', () => {
    expect(divide('100', '0')).to.equal(Infinity);
    expect(divide('20', '10')).to.equal(2);
    expect(divide('10.5', '11.5')).to.equal(0.9130434782608695);
    expect(divide('2', '3')).to.equal(0.6666666666666666);
    expect(divide('0', '0')).to.be.NaN;
  });

  it('test with correct values, but negative string inputs', () => {
    expect(divide('-10', '30')).to.equal(-0.3333333333333333);
    expect(divide('-10', '-30')).to.equal(0.3333333333333333);
    expect(divide('10', '-30')).to.equal(-0.3333333333333333);
  });
});
