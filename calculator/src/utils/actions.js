import { DIGIT_REGEX, signs } from '../config.js';
import { checkForSymbol, checkIsNumber } from './auxiliaryFunctions.js';

export function sum(sum1, sum2) {
  const isSum1Number = checkIsNumber(sum1);
  const isSum2Number = checkIsNumber(sum2);

  if (isSum1Number && isSum2Number) return Number(sum1) + Number(sum2);
}

export function subtract(sum1, sum2) {
  const isSum1Number = checkIsNumber(sum1);
  const isSum2Number = checkIsNumber(sum2);
  if (isSum1Number && isSum2Number) return Number(sum1) - Number(sum2);
}

export function multiply(sum1, sum2) {
  const isSum1Number = checkIsNumber(sum1);
  const isSum2Number = checkIsNumber(sum2);
  if (isSum1Number && isSum2Number) return Number(sum1) * Number(sum2);
}

export function divide(sum1, sum2) {
  const isSum1Number = checkIsNumber(sum1);
  const isSum2Number = checkIsNumber(sum2);
  if (isSum1Number && isSum2Number) return Number(sum1) / Number(sum2);
}

export function firstDigitPercent(value) {
  if (!value?.length === 0 || !checkIsNumber(value)) return;
  return Number(value) / 100;
}

export function secondDigitPercent(firstValue, secondValue) {
  if (
    !firstValue?.length === 0 ||
    !secondValue?.length === 0 ||
    !checkIsNumber(firstValue) ||
    !checkIsNumber(secondValue)
  )
    return;
  return (Number(firstValue) * Number(secondValue)) / 100;
}

function calcReverse(sum) {
  return sum > 0 ? (sum = Number(-sum)) : (sum = Math.abs(sum));
}

export function reverse(value) {
  if (
    value === null ||
    (typeof value !== 'string' && value?.length === 0) ||
    (typeof value !== 'number' && value?.length === 0)
  )
    return undefined;

  let stringSum = value?.toString();
  const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);
  const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);

  if (hasValueIncludesPercent || hasValueIncludesSquare) {
    const matches = stringSum.match(DIGIT_REGEX);
    const joinedMatches = matches?.join('');
    const numberOfMatch = Number(joinedMatches);
    const revertDigit = matches.length > 0 ? calcReverse(numberOfMatch) : 0;

    return value.replace(joinedMatches, revertDigit);
  }
  return calcReverse(Number(value));
}

export function squareRoot(sum) {
  if ((sum && typeof sum === 'string') || (sum && typeof sum === 'number')) {
    const isSquareAvailable = checkForSymbol(sum, [signs['√']]);
    let result = Math?.sqrt(Number(isSquareAvailable ? sum?.slice(1) : sum));
    result = result.toString()?.split('');
    result = result.join('');
    return result;
  }
  return;
}
