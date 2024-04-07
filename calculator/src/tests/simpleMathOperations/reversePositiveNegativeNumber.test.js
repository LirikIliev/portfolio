import { expect } from 'chai';
import { reverse } from '../../utils/actions.js';

describe('Test for "reverse" function', function () {
  it('test with correct values for fist and second function inputs', () => {
    expect(reverse(10000)).to.equal(-10000);
    expect(reverse(1000)).to.equal(-1000);
    expect(reverse(100)).to.equal(-100);
    expect(reverse(5.5)).to.equal(-5.5);
    expect(reverse(5.555555555)).to.equal(-5.555555555);
    expect(reverse(0)).to.be.equal(0);
  });

  it('test with correct values, but negative number inputs', () => {
    expect(reverse(-100)).to.equal(100);
    expect(reverse(-10)).to.equal(10);
    expect(reverse(-5.5)).to.equal(5.5);
    expect(reverse(-444)).to.equal(444);
  });

  it('test with correct values, but on type string', () => {
    expect(reverse('100')).to.equal(-100);
    expect(reverse('10.5')).to.equal(-10.5);
    expect(reverse('5.5555555555')).to.equal(-5.5555555555);
    expect(reverse('0.222222')).to.equal(-0.222222);
    expect(reverse('0')).to.be.equal(0);
  });

  it('test with correct values, but negative string inputs', () => {
    expect(reverse('-20')).to.equal(20);
    expect(reverse('-10')).to.equal(10);
    expect(reverse('-5.555555550')).to.equal(5.55555555);
    expect(reverse('-0')).to.equal(0);
  });

  it('test with correct negative square root values', () => {
    expect(reverse('√-20')).to.equal('√20');
    expect(reverse('√-10')).to.equal('√10');
    expect(reverse('√-5.555555550')).to.equal('√5.55555555');
    expect(reverse('√-0')).to.equal('√0');
  });

  it('test with correct positive square root values', () => {
    expect(reverse('√200')).to.equal('√-200');
    expect(reverse('√10')).to.equal('√-10');
    expect(reverse('√5.555555550')).to.equal('√-5.55555555');
    expect(reverse('√0')).to.equal('√0');
  });

  it('test with correct negative square root values', () => {
    expect(reverse('√-20')).to.equal('√20');
    expect(reverse('√-10')).to.equal('√10');
    expect(reverse('√-5.555555550')).to.equal('√5.55555555');
    expect(reverse('√-0')).to.equal('√0');
  });

  it('test with correct positive percent values', () => {
    expect(reverse('200%')).to.equal('-200%');
    expect(reverse('10%')).to.equal('-10%');
    expect(reverse('5.555555550%')).to.equal('-5.55555555%');
    expect(reverse('0%')).to.equal('0%');
  });

  it('test with correct negative percent values', () => {
    expect(reverse('-200%')).to.equal('200%');
    expect(reverse('-10%')).to.equal('10%');
    expect(reverse('-5.555555550%')).to.equal('5.55555555%');
    expect(reverse('-0%')).to.equal('0%');
  });

  it('test with correct positive percent and square root values', () => {
    expect(reverse('√200%')).to.equal('√-200%');
    expect(reverse('√10%')).to.equal('√-10%');
    expect(reverse('√5.555555550%')).to.equal('√-5.55555555%');
    expect(reverse('√0%')).to.equal('√0%');
  });

  it('test with correct negative percent and square root values', () => {
    expect(reverse('√-200%')).to.equal('√200%');
    expect(reverse('√-10%')).to.equal('√10%');
    expect(reverse('√-5.555555550%')).to.equal('√5.55555555%');
    expect(reverse('√-0%')).to.equal('√0%');
  });

  it('test with incorrect values', () => {
    expect(reverse()).to.be.NaN;
    expect(reverse([])).to.be.undefined;
    expect(reverse({})).to.be.NaN;
    expect(reverse(undefined)).to.be.NaN;
    expect(reverse('')).to.be.undefined;
    expect(reverse(null)).to.be.undefined;
    expect(reverse('werwerwer')).to.be.NaN;
    expect(reverse('032840234kaljsdasda')).to.be.NaN;
  });
});
