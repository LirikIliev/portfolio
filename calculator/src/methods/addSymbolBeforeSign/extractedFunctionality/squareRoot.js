import { signs, textAreaValue, valuesObject } from '../../../config.js';
import {
  calculateSum,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');

export const squareRoot = ({ digitSquareRoot, value }) => {
  if (!valuesObject.sign && !valuesObject.firstDigit && !digitSquareRoot) {
    valuesObject.firstDigit += value;
    textAreaValue.push(value);
    printResult();
  } else if (value !== signs['√'] && !valuesObject.sign && digitSquareRoot) {
    valuesObject.firstDigit += value;
    textAreaValue.pop();
    textAreaValue.push(valuesObject.firstDigit);
    valuesObject.sum = calculateSum(textAreaValue);
    printResult();
  }
};
