import { ZERO_DOT, signs, textAreaValue, valuesObject } from '../../config.js';
import {
  checkForSymbol,
  checkIsNumber,
  isInt,
} from '../../utils/auxiliaryFunctions.js';

const addPeriodInCaseOfNoValue = () => {
  const hasTextAreaLength = !!textAreaValue?.length > 0;
  const lastIndex = hasTextAreaLength ? textAreaValue.length : 0;

  const hasSumLength = !!valuesObject.sum?.length > 0;
  const internalValue = hasSumLength ? textAreaValue[lastIndex] : ZERO_DOT;

  textAreaValue[lastIndex] = internalValue;
  valuesObject.sum = internalValue;
};

const addDecimalToTheSum = (value, valueToUpdate) => {
  const isSumAvailable = !!valuesObject.sum;
  const isSumNumber = checkIsNumber(valuesObject.sum);
  const isSumEqualToZero =
    isSumAvailable && isSumNumber && Number(valuesObject.sum) === 0;
  const isSumBiggerThenZero =
    isSumAvailable && isSumNumber && Number(valuesObject.sum) > 0;
  const isSumIncludesPeriod = checkForSymbol(valuesObject.sum, [signs['.']]);
  const isValueDifferentFromPeriod = value !== signs['.'];
  const isValueDifferentFromZeroPeriod = value !== ZERO_DOT;

  if (isSumEqualToZero && isValueDifferentFromPeriod) {
    valuesObject.sum = value;
    textAreaValue[textAreaValue.length - 1] += value;
  } else if (!isSumAvailable && !isValueDifferentFromPeriod) {
    addPeriodInCaseOfNoValue();
  } else if (
    isValueDifferentFromZeroPeriod ||
    isSumBiggerThenZero ||
    (isSumAvailable && !isSumIncludesPeriod)
  ) {
    !isSumIncludesPeriod ? (valuesObject.sum += value) : null;
    textAreaValue[textAreaValue.length - 1] += value;
  }

  valuesObject[valueToUpdate] += value;
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

  const isTextareaInteger = isInt(textAreaValue[textAreaValue.length - 1]);

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
