import { signs, textAreaValue, valuesObject } from '../../config.js';
import {
  calculateSum,
  checkForSymbol,
  checkIsNumber,
} from '../../utils/auxiliaryFunctions.js';

export const addPercent = () => {
  const value = valuesObject.eventValue;
  const textareaValue = textAreaValue[textAreaValue?.length - 1];
  const isValueNumber = checkIsNumber(textareaValue);

  const isSignAvailable = !!valuesObject.sign;
  const isTextareaLengthBiggerThenOne = textAreaValue
    ? textareaValue?.length > 1
    : false;
  const isSquareAvailableInTextarea = checkForSymbol(textareaValue, [
    signs['√'],
  ]);

  const isPercentNotAvailableInTextarea =
    checkForSymbol(textareaValue, [signs['%']]) === false;

  //add percent in first amount of digit in calculator
  const isSignNotAvailableAndValueIsNumber = !isSignAvailable && isValueNumber;
  const hasSignAndTextareaCoversAllRequirements =
    isSignAvailable &&
    textareaValue &&
    isSquareAvailableInTextarea &&
    isTextareaLengthBiggerThenOne &&
    isPercentNotAvailableInTextarea;

  const hasPercentBeAddedToFirstAmountOfDigits =
    isSignNotAvailableAndValueIsNumber ||
    hasSignAndTextareaCoversAllRequirements;

  //add percent in every next amount of digits
  const isSignAvailableAndValueIsNumber = isSignAvailable && isValueNumber;
  const isSignAndValuesAvailableAndIncludesSymbols =
    !isSignAvailable &&
    isSquareAvailableInTextarea &&
    isTextareaLengthBiggerThenOne &&
    isPercentNotAvailableInTextarea;

  const hasPercentBeAddedToLastAmountOfDigits =
    isSignAvailableAndValueIsNumber ||
    isSignAndValuesAvailableAndIncludesSymbols;

  if (hasPercentBeAddedToFirstAmountOfDigits) {
    valuesObject.firstDigit += value;
    textAreaValue[textAreaValue.length - 1] += value;
  } else if (hasPercentBeAddedToLastAmountOfDigits) {
    textAreaValue[textAreaValue.length - 1] += value;
    valuesObject.sum = calculateSum(textAreaValue);
    valuesObject.secondDigit += value;
    valuesObject.firstDigit = valuesObject.sum;
  }
};
