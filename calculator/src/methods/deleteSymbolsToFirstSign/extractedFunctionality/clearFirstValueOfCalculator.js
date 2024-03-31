import { signs, textAreaValue, valuesObject } from '../../../config.js';
import {
  checkForSymbol,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

export const clearFirstValueOfCalculator = () => {
  const index = textAreaValue.length - 1;
  const value = textAreaValue[index]?.toString();
  const hasValueLength = !!value?.length;

  const isValueLengthOne = hasValueLength && value.length === 1;
  const isValueLengthTwo = hasValueLength && value.length === 2;
  const isValueNegative = textAreaValue[index] < 0;

  if (!hasValueLength) {
    return;
  }

  const isValueSquareOrMinusPlus = checkForSymbol(value, [
    signs['√'],
    signs['±'],
  ]);

  const hasDeleteAllValue =
    (isValueLengthTwo && isValueSquareOrMinusPlus) ||
    (isValueLengthTwo && isValueNegative);
  const hasClearAllIndex = !!isValueLengthOne;
  if (hasClearAllIndex) {
    textAreaValue.pop();
  } else if (hasDeleteAllValue) {
    textAreaValue.splice(index, 1);
  } else if (hasValueLength) {
    valuesObject.firstDigit = value.slice(0, -1);
    textAreaValue[index] = valuesObject.firstDigit;
    return;
  }

  valuesObject.firstDigit = '';
  valuesObject.sum = '';
  printResult();
};
