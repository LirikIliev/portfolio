import { ZERO_DOT, signs, textAreaValue, valuesObject } from '../../config.js';
import {
  checkForSymbol,
  checkIsNumber,
  isInt,
} from '../../utils/auxiliaryFunctions.js';

const addPeriodInCaseOfNoValue = (valueToUpdate) => {
  const hasTextAreaLength = !!textAreaValue?.length > 0;
  const lastIndex = hasTextAreaLength ? textAreaValue.length : 0;

  const isUpdatedValueBiggerThenZero = !!valuesObject?.[valueToUpdate] > 0;
  const internalValue = isUpdatedValueBiggerThenZero
    ? textAreaValue[lastIndex]
    : ZERO_DOT;

  textAreaValue[lastIndex] = internalValue;
  valuesObject.sum = internalValue;
};

const addDecimalToTheSum = (value, valueToUpdate) => {
  const isSumNumber = checkIsNumber(valuesObject.sum);
  const isSumEqualToZero = isSumNumber && Number(valuesObject.sum) === 0;
  const isSumIncludesPeriod = checkForSymbol(valuesObject.sum, [signs['.']]);
  const isValuePeriod = value === signs['.'];
  const isValueToUpdateEmpty = valuesObject?.[valueToUpdate]?.length === 0;

  if (isValuePeriod && isValueToUpdateEmpty) {
    addPeriodInCaseOfNoValue(valueToUpdate);
    valuesObject[valueToUpdate] += ZERO_DOT;
  } else if (!isSumEqualToZero || !isSumIncludesPeriod) {
    !isSumIncludesPeriod ? (valuesObject.sum += value) : null;
    textAreaValue[textAreaValue.length - 1] += value;
    valuesObject[valueToUpdate] += value;
  }
};

const checkForInteger = (value) => {
  if (value?.length === 0) return true;
  const isValueWithSquare = checkForSymbol(value, [signs['√']]);
  if (isValueWithSquare) {
    const extractValueFromSquare = value.slice(1);
    return isInt(extractValueFromSquare);
  }
  return isInt(value);
};

export const addPeriod = () => {
  const value = valuesObject.eventValue;
  const isSignAvailable = !!valuesObject.sign;
  const isFirstDigitIncludesPercent = checkForSymbol(valuesObject.firstDigit, [
    signs['%'],
  ]);

  const isSecondDigitAvailable = !!valuesObject.secondDigit;
  const isSecondDigitIncludePercent = checkForSymbol(valuesObject.secondDigit, [
    signs['%'],
  ]);

  const isTextareaInteger = isSignAvailable
    ? checkForInteger(valuesObject.secondDigit)
    : checkForInteger(valuesObject.firstDigit);

  if (
    !isSecondDigitAvailable &&
    !isSignAvailable &&
    isTextareaInteger &&
    !isFirstDigitIncludesPercent
  ) {
    addDecimalToTheSum(value, 'firstDigit');
  } else if (
    isSignAvailable &&
    isTextareaInteger &&
    !isSecondDigitIncludePercent
  ) {
    addDecimalToTheSum(value, 'secondDigit');
  }
};
