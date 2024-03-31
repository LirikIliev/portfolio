import { DIGIT_REGEX, signs } from '../config.js';
import { checkForSymbol } from './auxiliaryFunctions.js';

export function sum(sum1, sum2) {
  return sum1 + sum2;
}

export function subtract(sum1, sum2) {
  return sum1 - sum2;
}

export function multiply(sum1, sum2) {
  return sum1 * sum2;
}

export function divide(sum1, sum2) {
  return sum1 / sum2;
}

export function firstDigitPercent(value) {
  const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);
  const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);
  if (hasValueIncludesSquare) {
    value = value.split('');
    value.shift();
    if (hasValueIncludesPercent) value.pop();
    value = value.join('');
  }

  return Number(value) / 100;
}

export function secondDigitPercent(firstValue, secondValue) {
  const hasFirstValueIncludesSquare = checkForSymbol(firstValue, [signs['√']]);
  const hasFirstValueIncludesPercent = checkForSymbol(firstValue, [signs['%']]);
  if (hasFirstValueIncludesSquare) {
    firstValue = firstValue.split('');
    firstValue.shift();
    if (hasFirstValueIncludesPercent) firstValue.pop();
    firstValue = firstValue.join('');
  }
  const hasSecondValueIncludesSquare = checkForSymbol(secondValue, [
    signs['√'],
  ]);
  const hasSecondValueIncludesPercent = checkForSymbol(secondValue, [
    signs['%'],
  ]);
  if (hasSecondValueIncludesSquare) {
    secondValue = secondValue.split('');
    secondValue.shift();
    if (hasSecondValueIncludesPercent) secondValue.pop();
    secondValue = secondValue.join('');
  }

  return (Number(firstValue) * Number(secondValue)) / 100;
}

export function afterPercent(sum, percent) {
  let result = sum - percent;
  return result;
}

function calcReverse(sum) {
  return sum > 0 ? (sum = Number(-sum)) : (sum = Math.abs(sum));
}

export function reverse(value) {
  let stringSum = value.toString();
  const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);
  const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);

  if (hasValueIncludesPercent || hasValueIncludesSquare) {
    const matches = stringSum.match(DIGIT_REGEX);
    const joinedMatches = matches?.join('');
    const numberOfMatch = Number(joinedMatches);
    const revertDigit = matches.length > 0 ? calcReverse(numberOfMatch) : 0;
    console.log(joinedMatches);

    const newValue = value.replace(joinedMatches, revertDigit);

    return value.replace(joinedMatches, revertDigit);
  }

  return calcReverse(Number(value));
}

export function squareRoot(sum) {
  let result = Math.sqrt(Number(sum.slice(1)));
  result = result.toString().split('');
  result = result.join('');
  return result;
}
