import { signs } from '../../../config.js';
import {
  calculateSum,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');

export const squareRoot = ({
  sign,
  firstDigit,
  digitSquareRoot,
  textAreaValue,
  sum,
  value,
}) => {
  if (!sign && !firstDigit && !digitSquareRoot) {
    firstDigit += value;
    textAreaValue.push(value);
    printResult(textAreaValue, false, sum, textAreaSelect);
  } else if (value !== signs['√'] && !sign && digitSquareRoot) {
    firstDigit += value;
    textAreaValue.pop();
    textAreaValue.push(firstDigit);
    sum = calculateSum(textAreaValue);
    printResult(textAreaValue, true, sum, textAreaSelect);
  }

  return {
    firstDigit,
    textAreaValue,
  };
};
