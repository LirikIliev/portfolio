import { expect } from 'chai';
import { subtract } from '../../utils/actions.js';

describe('Test for "subtract" function', function () {
  it('test with correct values for fist and second function inputs', () => {
    expect(subtract(100, 0)).to.equal(100);
    expect(subtract(2, 3)).to.equal(-1);
    expect(subtract(10.5, 11.5)).to.equal(-1);
    expect(subtract(0, 0)).to.equal(0);
  });

  it('test with correct values, but negative number inputs', () => {
    expect(subtract(-10, 30)).to.equal(-40);
    expect(subtract(-10, -30)).to.equal(20);
    expect(subtract(10, -30)).to.equal(40);
  });

  it('test with correct values, but on type string', () => {
    expect(subtract('100', '0')).to.equal(100);
    expect(subtract('20', '10')).to.equal(10);
    expect(subtract('10.5', '11.5')).to.equal(-1);
    expect(subtract('2', '3')).to.equal(-1);
    expect(subtract('0', '0')).to.equal(0);
  });

  it('test with correct values, but negative string inputs', () => {
    expect(subtract('-10', '30')).to.equal(-40);
    expect(subtract('-10', '-30')).to.equal(20);
    expect(subtract('10', '-30')).to.equal(40);
  });
});
