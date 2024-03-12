import { signs, textAreaSelect } from '../../../config.js';
import {
  checkForSymbol,
  checkIsNumber,
} from '../../../utils/auxiliaryFunctions.js';

export const clearFirstValueOfCalculator = ({
  textAreaValue,
  sum,
  firstDigit,
}) => {
  const value = textAreaValue?.[0];
  const isValueNumber = checkIsNumber(value);
  const isLengthPositive = textAreaValue[0]?.length > 1;
  const isNumberBiggerThenOne = isValueNumber ? value > 1 : false;
  const isValueLengthLongerThenOne = isLengthPositive || isNumberBiggerThenOne;

  if (isValueLengthLongerThenOne) {
    const isValueNegative = isValueNumber && value <= 0;
    const hasDoubleInputValuesRemove =
      checkForSymbol(value, [signs['√']]) || isValueNegative;
    const isValueLengthTwo = value.length === 2;
    const numberToSlice =
      hasDoubleInputValuesRemove && isValueLengthTwo ? -2 : -1;
    const newValue = value?.slice(0, numberToSlice);
    textAreaValue[0] = newValue;
    textAreaSelect.value = `${newValue}`;
    firstDigit = newValue;
    sum = Number(newValue);
  } else {
    textAreaValue.pop();
    textAreaSelect.value = '';
    firstDigit = '';
    sum = 0;
  }

  return {
    firstDigit,
    sum,
  };
};
