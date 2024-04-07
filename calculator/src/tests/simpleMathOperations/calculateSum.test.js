import { expect } from 'chai';
import { sum } from '../../utils/actions.js';

describe('Test for "sum" function', function () {
  it('test with correct values for fist and second function inputs', () => {
    expect(sum(100, 0)).to.equal(100);
    expect(sum(2, 3)).to.equal(5);
    expect(sum(10.5, 11.5)).to.equal(22);
    expect(sum(0, 0)).to.equal(0);
    expect(sum(-10, 30)).to.equal(20);
    expect(sum(10, -30)).to.equal(-20);
    expect(sum(-10, -30)).to.equal(-40);
  });

  it('test with correct values, but on type string', () => {
    expect(sum('100', '0')).to.equal(100);
    expect(sum('20', '10')).to.equal(30);
    expect(sum('10.5', '11.5')).to.equal(22);
    expect(sum('2', '3')).to.equal(5);
    expect(sum('0', '0')).to.equal(0);
    expect(sum('-10', '30')).to.equal(20);
    expect(sum('10', '-30')).to.equal(-20);
    expect(sum('-10', '-30')).to.equal(-40);
  });
});
