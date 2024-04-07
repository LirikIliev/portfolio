import { expect } from 'chai';
import { secondDigitPercent } from '../../utils/actions.js';

describe('Test for "add percent to second digit" function', function () {
  it('test with correct values function inputs', () => {
    expect(secondDigitPercent(100, 100)).to.equal(100);
    expect(secondDigitPercent(100, 1)).to.equal(1);
    expect(secondDigitPercent(9, 9)).to.equal(0.81);
    expect(secondDigitPercent(5.68, 9.73)).to.equal(0.5526639999999999);
    expect(secondDigitPercent(1, 1)).to.equal(0.01);
  });

  it('test with correct string values function inputs', () => {
    expect(secondDigitPercent('10000', '10000')).to.equal(1000000);
    expect(secondDigitPercent('100', '100')).to.equal(100);
    expect(secondDigitPercent('20', '20')).to.equal(4);
    expect(secondDigitPercent('9', '9')).to.equal(0.81);
    expect(secondDigitPercent('6.66666', '9.99999')).to.equal(
      0.6666653333340001
    );
    expect(secondDigitPercent('1', '1')).to.equal(0.01);
  });

  it('test with incorrect values function inputs', () => {
    expect(secondDigitPercent('sdhjfkshdf')).to.be.undefined;
    expect(secondDigitPercent('')).to.be.undefined;
    expect(secondDigitPercent()).to.be.undefined;
    expect(secondDigitPercent([])).to.be.undefined;
    expect(secondDigitPercent({})).to.be.undefined;
    expect(secondDigitPercent(undefined)).to.be.undefined;
    expect(secondDigitPercent(null)).to.be.undefined;
    expect(secondDigitPercent(false)).to.be.undefined;
    expect(secondDigitPercent('test', 'test1')).to.be.undefined;
    expect(secondDigitPercent('', '')).to.be.undefined;
    expect(secondDigitPercent()).to.be.undefined;
    expect(secondDigitPercent([[]])).to.be.undefined;
    expect(secondDigitPercent({})).to.be.undefined;
    expect(secondDigitPercent(undefined, null)).to.be.undefined;
    expect(secondDigitPercent(null, null)).to.be.undefined;
    expect(secondDigitPercent(false, true)).to.be.undefined;
  });
});
