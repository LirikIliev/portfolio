import { signs } from '../config.js';

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

export function firstDigitPercent(sum) {
  if (sum.toString().includes('√')) {
    sum = sum.split('');
    sum.shift();
    sum = sum.join('');

    if (sum.includes('%')) {
      sum = sum.split('');
      sum.pop();
      sum = sum.join('');
    }
  }
  let result = Number(sum) / 100;
  return result;
}

export function secondDigitPercent(sum1, sum2) {
  if (sum1.toString().includes('√')) {
    sum1 = sum1.split('');
    sum1.shift();
    sum1 = sum1.join('');

    if (sum1.includes('%')) {
      sum1 = sum1.split('');
      sum1.pop();
      sum1 = sum1.join('');
    }
  }
  if (sum2.toString().includes('√')) {
    sum2 = sum2.split('');
    sum2.shift();
    sum2 = sum2.join('');

    if (sum2.includes('%')) {
      sum2 = sum2.split('');
      sum2.pop();
      sum2 = sum2.join('');
    }
  }

  let result = (Number(sum1) * Number(sum2)) / 100;
  return result;
}

export function afterPercent(sum, percent) {
  let result = sum - percent;
  return result;
}

function calcReverse(sum) {
  return sum > 0 ? (sum = Number(-sum)) : (sum = Math.abs(sum));
}

const digitRegex = /\d+\.?/g;

export function reverse(sum) {
  let stringSum = sum.toString();
  const isSumIncludesSigns =
    stringSum?.includes(signs['%']) || stringSum?.includes(signs['√']);
  if (isSumIncludesSigns) {
    const matches = stringSum.match(digitRegex);
    const joinedMatches = matches?.join('');
    const numberOfMatch = Number(joinedMatches);
    const revertDigit = matches.length > 0 ? calcReverse(numberOfMatch) : 0;

    return sum.replace(joinedMatches, revertDigit);
  }

  return calcReverse(Number(sum));
}

export function squareRoot(sum) {
  let result = Math.sqrt(Number(sum.slice(1)));
  result = result.toString().split('');
  result = result.join('');
  return result;
}
