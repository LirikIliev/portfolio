import { signs, textAreaValue, valuesObject } from '../../../config.js';
import {
  calculateSum,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

export const squareRoot = ({ hasDigitNotIncludesSquare, value }) => {
  if (
    !valuesObject.sign &&
    !valuesObject.firstDigit &&
    !hasDigitNotIncludesSquare
  ) {
    valuesObject.firstDigit += value;
    textAreaValue.push(value);
    printResult();
  } else if (
    value !== signs['√'] &&
    !valuesObject.sign &&
    hasDigitNotIncludesSquare
  ) {
    valuesObject.firstDigit += value;
    textAreaValue.pop();
    textAreaValue.push(valuesObject.firstDigit);
    calculateSum(textAreaValue);
    printResult();
  }
};
