import { signs, textAreaValue, valuesObject } from '../../../config.js';

export const addSquareRoot = ({ value, isValueSquare }) => {
  const isDigitIncludesSquareSign = valuesObject.secondDigit
    ?.toString()
    ?.includes(signs['√']);
  if (
    isValueSquare &&
    !isDigitIncludesSquareSign &&
    !valuesObject.secondDigit &&
    valuesObject.sign
  ) {
    valuesObject.secondDigit += value;
    textAreaValue.push(value);
  } else if (
    valuesObject.secondDigit &&
    isDigitIncludesSquareSign &&
    valuesObject.sign
  ) {
    valuesObject.secondDigit += value;
    textAreaValue.pop();
    textAreaValue.push(valuesObject.secondDigit);
  }
};
