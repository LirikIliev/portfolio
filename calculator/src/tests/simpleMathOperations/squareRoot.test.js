import { expect } from 'chai';
import { squareRoot } from '../../utils/actions.js';

describe('Test for "add square root to digit" function', function () {
  it('test with correct values function inputs', () => {
    expect(squareRoot('√')).to.equal('0');
    expect(squareRoot('√0')).to.equal('0');
    expect(squareRoot('√1')).to.equal('1');
    expect(squareRoot('√9')).to.equal('3');
    expect(squareRoot('√124')).to.equal('11.135528725660043');
    expect(squareRoot('√1000000')).to.equal('1000');
  });

  it('test with correct numbers values type, function inputs', () => {
    expect(squareRoot('0')).to.equal('0');
    expect(squareRoot(9)).to.equal('3');
    expect(squareRoot(100)).to.equal('10');
    expect(squareRoot(18)).to.equal('4.242640687119285');
    expect(squareRoot(124)).to.equal('11.135528725660043');
    expect(squareRoot(1000000)).to.equal('1000');
  });

  it('test with incorrect types of value, function inputs', () => {
    expect(squareRoot(NaN)).to.be.undefined;
    expect(squareRoot([])).to.be.undefined;
    expect(squareRoot({})).to.be.undefined;
    expect(squareRoot(undefined)).to.be.undefined;
    expect(squareRoot(false)).to.be.undefined;
    expect(squareRoot()).to.be.undefined;
    expect(squareRoot('')).to.be.undefined;
    expect(squareRoot('')).to.be.undefined;
    expect(squareRoot('√-')).to.equal('NaN');
    expect(squareRoot(-0)).to.be.undefined;
  });

  it.only('test with negative values, function inputs', () => {
    expect(squareRoot('√-124')).to.equal('NaN');
    expect(squareRoot('√-4')).to.equal('NaN');
    expect(squareRoot(-4)).to.equal('NaN');
    expect(squareRoot(-10)).to.equal('NaN');
    expect(squareRoot(-100)).to.equal('NaN');
  });
});
