import { expect } from 'chai';
import { multiply } from '../../utils/actions.js';

describe('Test for "multiply" function', function () {
  it('test with correct values for fist and second function inputs', () => {
    expect(multiply(100, 0)).to.equal(0);
    expect(multiply(2, 3)).to.equal(6);
    expect(multiply(5.5, 5.5)).to.equal(30.25);
    expect(multiply(0, 0)).to.equal(0);
  });

  it('test with correct values, but negative number inputs', () => {
    expect(multiply(-10, 30)).to.equal(-300);
    expect(multiply(-10, -30)).to.equal(300);
    expect(multiply(10, -30)).to.equal(-300);
  });

  it('test with correct values, but on type string', () => {
    expect(multiply('100', '0')).to.equal(0);
    expect(multiply('20', '10')).to.equal(200);
    expect(multiply('10.5', '11.5')).to.equal(120.75);
    expect(multiply('2', '3')).to.equal(6);
    expect(multiply('0', '0')).to.equal(0);
  });

  it('test with correct values, but negative string inputs', () => {
    expect(multiply('-10', '30')).to.equal(-300);
    expect(multiply('-10', '-30')).to.equal(300);
    expect(multiply('10', '-30')).to.equal(-300);
  });
});
