import { expect } from 'chai';
import { checkIsNumber } from '../../utils/auxiliaryFunctions.js';

describe('Test check is number function, who test values for number (negative or positive)', function () {
  it('Test functionality with positive number', () => {
    expect(checkIsNumber(10000000)).to.be.true;
    expect(checkIsNumber(1000)).to.be.true;
    expect(checkIsNumber(256)).to.be.true;
    expect(checkIsNumber(23)).to.be.true;
    expect(checkIsNumber(123124.2123)).to.be.true;
    expect(checkIsNumber(1.2)).to.be.true;
    expect(checkIsNumber(0.2)).to.be.true;
    expect(checkIsNumber(0)).to.be.true;
  });

  it('Test functionality with negative number', () => {
    expect(checkIsNumber(-10000000)).to.be.true;
    expect(checkIsNumber(-2310)).to.be.true;
    expect(checkIsNumber(-567)).to.be.true;
    expect(checkIsNumber(-33)).to.be.true;
    expect(checkIsNumber(-1223.666)).to.be.true;
    expect(checkIsNumber(-12.2)).to.be.true;
    expect(checkIsNumber(-0.2)).to.be.true;
    expect(checkIsNumber(-0)).to.be.true;
  });

  it('Test functionality with positive strings', () => {
    expect(checkIsNumber('10000000')).to.be.true;
    expect(checkIsNumber('2310')).to.be.true;
    expect(checkIsNumber('567')).to.be.true;
    expect(checkIsNumber('33')).to.be.true;
    expect(checkIsNumber('1223.666')).to.be.true;
    expect(checkIsNumber('12.2')).to.be.true;
    expect(checkIsNumber('0.2')).to.be.true;
    expect(checkIsNumber('0')).to.be.true;
  });

  it('Test functionality with negative strings', () => {
    expect(checkIsNumber('-10000000')).to.be.true;
    expect(checkIsNumber('-1000')).to.be.true;
    expect(checkIsNumber('-256')).to.be.true;
    expect(checkIsNumber('-23')).to.be.true;
    expect(checkIsNumber('-123124.2123')).to.be.true;
    expect(checkIsNumber('-1.2')).to.be.true;
    expect(checkIsNumber('-0.2')).to.be.true;
    expect(checkIsNumber('-0')).to.be.true;
  });

  it('Test functionality with positive strings with symbols', () => {
    expect(checkIsNumber('10%')).to.be.false;
    expect(checkIsNumber('√2')).to.be.false;
    expect(checkIsNumber('567%')).to.be.false;
    expect(checkIsNumber('%33')).to.be.false;
    expect(checkIsNumber('12.6%')).to.be.false;
    expect(checkIsNumber('√1.2')).to.be.false;
    expect(checkIsNumber('√0.2')).to.be.false;
    expect(checkIsNumber('0%')).to.be.false;
  });

  it('Test functionality with positive strings with symbols', () => {
    expect(checkIsNumber('-100%')).to.be.false;
    expect(checkIsNumber('√-20')).to.be.false;
    expect(checkIsNumber('-567%')).to.be.false;
    expect(checkIsNumber('%13')).to.be.false;
    expect(checkIsNumber('-12.6%')).to.be.false;
    expect(checkIsNumber('√-1.2%')).to.be.false;
    expect(checkIsNumber('√-0.2')).to.be.false;
    expect(checkIsNumber('-0%')).to.be.false;
  });

  it('Test functionality with incorrect values', () => {
    expect(checkIsNumber()).to.be.false;
    expect(checkIsNumber('')).to.be.false;
    expect(checkIsNumber(null)).to.be.false;
    expect(checkIsNumber(false)).to.be.false;
    expect(checkIsNumber([])).to.be.false;
    expect(checkIsNumber({})).to.be.false;
    expect(checkIsNumber('test')).to.be.false;
    expect(checkIsNumber('.')).to.be.false;
    expect(checkIsNumber(() => null)).to.be.false;
  });
});
