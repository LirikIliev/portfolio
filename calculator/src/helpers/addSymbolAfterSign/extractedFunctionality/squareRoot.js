import { signs } from '../../../config.js';

export const addSquareRoot = ({
  sign,
  textAreaValue,
  secondDigit,
  value,
  isValueSquare,
}) => {
  const isDigitIncludesSquareSign = secondDigit
    ?.toString()
    ?.includes(signs['√']);
  if (isValueSquare && !isDigitIncludesSquareSign && !secondDigit && sign) {
    secondDigit += value;
    textAreaValue.push(value);
  } else if (secondDigit && isDigitIncludesSquareSign && sign) {
    secondDigit += value;
    textAreaValue.pop();
    textAreaValue.push(secondDigit);
  }

  return {
    secondDigit,
    textAreaValue,
  };
};
