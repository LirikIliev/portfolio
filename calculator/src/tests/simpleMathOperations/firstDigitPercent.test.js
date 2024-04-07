import { expect } from 'chai';
import { firstDigitPercent } from '../../utils/actions.js';

describe('Test for "add percent to first digit" function', function () {
  it('test with correct values function inputs', () => {
    expect(firstDigitPercent(10000)).to.equal(100);
    expect(firstDigitPercent(100)).to.equal(1);
    expect(firstDigitPercent(9)).to.equal(0.09);
    expect(firstDigitPercent(1)).to.equal(0.01);
    expect(firstDigitPercent(0)).to.equal(0);
  });

  it('test with correct string values function inputs', () => {
    expect(firstDigitPercent('10000')).to.equal(100);
    expect(firstDigitPercent('100')).to.equal(1);
    expect(firstDigitPercent('20')).to.equal(0.2);
    expect(firstDigitPercent('9')).to.equal(0.09);
    expect(firstDigitPercent('1')).to.equal(0.01);
    expect(firstDigitPercent('0')).to.equal(0);
  });

  it('test with incorrect values function inputs', () => {
    expect(firstDigitPercent('sdhjfkshdf')).to.be.undefined;
    expect(firstDigitPercent('')).to.be.undefined;
    expect(firstDigitPercent()).to.be.undefined;
    expect(firstDigitPercent([])).to.be.undefined;
    expect(firstDigitPercent({})).to.be.undefined;
    expect(firstDigitPercent(undefined)).to.be.undefined;
    expect(firstDigitPercent(null)).to.be.undefined;
    expect(firstDigitPercent(false)).to.be.undefined;
  });
});
