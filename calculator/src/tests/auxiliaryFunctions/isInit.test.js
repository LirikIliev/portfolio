import { expect } from 'chai';
import { isInt } from '../../utils/auxiliaryFunctions.js';

describe('isInit function test', function () {
  it('Test wit correct decimal values!', () => {
    expect(isInt(2222.22222)).to.be.equal(false);
    expect(isInt(22.2)).to.be.equal(false);
    expect(isInt(2.2)).to.be.equal(false);
    expect(isInt(0.2)).to.be.equal(false);
    expect(isInt(0.22222)).to.be.equal(false);
    expect(isInt(-12.2)).to.be.equal(false);
    expect(isInt(-0.2)).to.be.equal(false);
  });

  it('Test wit correct decimal string values!', () => {
    expect(isInt('2222.22222')).to.be.equal(false);
    expect(isInt('122.2')).to.be.equal(false);
    expect(isInt('0000.2')).to.be.equal(false);
    expect(isInt('1230.22222')).to.be.equal(false);
    expect(isInt('-12.2')).to.be.equal(false);
    expect(isInt('-0.2')).to.be.equal(false);
  });

  it('Test wit correct integer values!', () => {
    expect(isInt(2222)).to.be.equal(true);
    expect(isInt(22)).to.be.equal(true);
    expect(isInt(2)).to.be.equal(true);
    expect(isInt(0)).to.be.equal(true);
    expect(isInt(12)).to.be.equal(true);
    expect(isInt(-12)).to.be.equal(true);
    expect(isInt(-2)).to.be.equal(true);
  });

  it('Test wit correct integer string values!', () => {
    expect(isInt('2222')).to.be.equal(true);
    expect(isInt('122')).to.be.equal(true);
    expect(isInt('2')).to.be.equal(true);
    expect(isInt('1230')).to.be.equal(true);
    expect(isInt('-12')).to.be.equal(true);
    expect(isInt('-2')).to.be.equal(true);
  });

  it('Test wit incorrect values!', () => {
    expect(isInt('test')).to.be.undefined;
    expect(isInt('')).to.be.undefined;
    expect(isInt({})).to.be.undefined;
    expect(isInt([])).to.be.undefined;
    expect(isInt(false)).to.be.undefined;
    expect(isInt(null)).to.be.undefined;
    expect(isInt()).to.be.undefined;
    expect(isInt('2.2.2')).to.be.undefined;
  });
});
