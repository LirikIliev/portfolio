import { signs, textAreaValue, valuesObject } from '../../../config.js';
import {
  checkForSymbol,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

export const clearFirstValueOfCalculator = () => {
  const index = textAreaValue.length - 1;
  const value = textAreaValue[index];
  const hasValueLength = !!value?.length;

  const isValueLengthOne = hasValueLength && value.length === 1;
  const isValueLengthTwo = hasValueLength && value.length === 2;

  if (!hasValueLength) {
    return;
  }

  const isValueSquareOrMinusPlus = checkForSymbol(value, [
    signs['√'],
    signs['±'],
  ]);

  const hasDeleteAllValue = isValueLengthTwo && isValueSquareOrMinusPlus;
  const hasClearAllIndex = !!isValueLengthOne;
  if (hasClearAllIndex) {
    textAreaValue.pop();
  } else if (hasDeleteAllValue) {
    textAreaValue.splice(index, 1);
  } else if (hasValueLength) {
    valuesObject.firstDigit = textAreaValue[index].slice(0, -1);
    textAreaValue[index] = valuesObject.firstDigit;
    return;
  }

  valuesObject.firstDigit = '';
  valuesObject.sum = '';
  printResult();
};
