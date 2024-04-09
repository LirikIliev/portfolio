import { expect } from 'chai';
import { checkForSymbol } from '../../utils/auxiliaryFunctions.js';
import { signs } from '../../config.js';

describe('Test check for symbol function', function () {
  it('Test with inputs without symbols', () => {
    expect(checkForSymbol(0, [signs['√']])).to.be.false;
    expect(checkForSymbol(25, [signs['%'], signs['√']])).to.be.false;
    expect(checkForSymbol(-25, [signs['%']])).to.be.false;
    expect(checkForSymbol(-25, [])).to.be.false;
  });

  it('Test values with symbols', () => {
    expect(checkForSymbol('√25', [signs['√']])).to.be.true;
    expect(checkForSymbol('25%', [signs['%']])).to.be.true;
    expect(checkForSymbol('25%', [signs['%']])).to.be.true;
    expect(checkForSymbol('√25%', [signs['%'], signs['√']])).to.be.true;
    expect(checkForSymbol('0.', ['.'])).to.be.true;
  });

  it('Test incorrect values', () => {
    expect(checkForSymbol()).to.be.false;
    expect(checkForSymbol(null, false)).to.be.false;
    expect(checkForSymbol({}, [])).to.be.false;
    expect(checkForSymbol({}, {})).to.be.false;
    expect(checkForSymbol('asdfjadf234')).to.be.false;
    expect(checkForSymbol(23, 23)).to.be.false;
    expect(checkForSymbol(-23, '23')).to.be.false;
    expect(checkForSymbol('', '')).to.be.false;
    expect(checkForSymbol(() => null, 'test')).to.be.false;
  });
});
