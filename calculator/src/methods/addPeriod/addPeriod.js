import { signs } from '../../config.js';
import {
  checkForSymbol,
  checkIsNumber,
  isInt,
} from '../../utils/auxiliaryFunctions.js';

const ZERO_POINT = '0.';

const addPeriodInCaseOfNoValue = ({ sum, hasLength, textAreaValue, value }) => {
  const hasTextAreaLength = !!textAreaValue?.length > 0;
  const lastIndex = hasTextAreaLength ? textAreaValue.length : 0;

  const hasSumLength = !!sum?.length > 0;
  const internalValue = hasSumLength ? textAreaValue[lastIndex] : ZERO_POINT;

  textAreaValue[lastIndex] = internalValue;
  sum = internalValue;

  return sum;
};

const addDecimalToTheSum = ({ sum, value, textAreaValue }) => {
  const isSumAvailable = !!sum;
  const isSumNumber = checkIsNumber(sum);
  const hasSumLength = sum?.length > 0;
  const isSumEqualToZero = isSumAvailable && isSumNumber && Number(sum) === 0;
  const isSumBiggerThenZero = isSumAvailable && isSumNumber && Number(sum) > 0;
  const isSumIncludesPeriod = checkForSymbol(sum, [signs['.']]);
  const isValueDifferentFromPeriod = value !== signs['.'];
  const isValueDifferentFromZeroPeriod = value !== ZERO_POINT;

  if (isSumEqualToZero && isValueDifferentFromPeriod) {
    sum = value;
    textAreaValue[textAreaValue.length - 1] += value;
  } else if (!isSumAvailable && !isValueDifferentFromPeriod) {
    sum = addPeriodInCaseOfNoValue({
      hasLength: hasSumLength,
      textAreaValue,
      value,
    });
  } else if (
    isValueDifferentFromZeroPeriod ||
    isSumBiggerThenZero ||
    (isSumAvailable && !isSumIncludesPeriod)
  ) {
    sum += value;
    textAreaValue[textAreaValue.length - 1] += value;
  }

  return sum;
};

export const addPeriod = ({
  firstDigit,
  secondDigit,
  textAreaValue,
  value,
  sign,
}) => {
  const isSignAvailable = !!sign;
  const isFirstDigitIncludesPercent = checkForSymbol(firstDigit, [signs['%']]);

  const isSecondDigitAvailable = !!secondDigit;
  const isSecondDigitIncludePercent = checkForSymbol(secondDigit, signs['%']);

  const isTextareaInteger = isInt(textAreaValue[textAreaValue.length - 1]);

  if (
    !isSecondDigitAvailable &&
    !isSignAvailable &&
    isTextareaInteger &&
    !isFirstDigitIncludesPercent
  ) {
    firstDigit = addDecimalToTheSum({ sum: firstDigit, value, textAreaValue });
  } else if (
    isSignAvailable &&
    isTextareaInteger &&
    !isSecondDigitIncludePercent
  ) {
    secondDigit = addDecimalToTheSum({
      sum: secondDigit,
      value,
      textAreaValue,
    });
  }

  return {
    firstDigit,
    secondDigit,
  };
};
