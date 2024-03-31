import { signs, textAreaValue, valuesObject } from '../../config.js';
import {
  calculateSum,
  checkForSymbol,
  checkIsNumber,
} from '../../utils/auxiliaryFunctions.js';

export const addPercent = () => {
  const value = valuesObject.eventValue;
  const currentValue = textAreaValue?.[textAreaValue?.length - 1];
  const isSignAvailable = !!valuesObject.sign;

  const hasCurrentValueSquareRoot =
    currentValue?.length === 1 && checkForSymbol(currentValue, [signs['√']]);
  const isPercentNotAvailableInTextarea = checkForSymbol(currentValue, [
    signs['%'],
  ]);

  if (isPercentNotAvailableInTextarea || hasCurrentValueSquareRoot) {
    return;
  }

  const hasPercentBeAddedToFirstAmountOfDigits = !isSignAvailable;

  if (hasPercentBeAddedToFirstAmountOfDigits) {
    valuesObject.firstDigit += value;
    textAreaValue[textAreaValue.length - 1] += value;
  } else {
    textAreaValue[textAreaValue.length - 1] += value;
    valuesObject.secondDigit += value;
    calculateSum(textAreaValue);
  }
};
