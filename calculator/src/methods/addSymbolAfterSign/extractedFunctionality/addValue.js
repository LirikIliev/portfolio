import { numbers, signs } from '../../../config.js';

export const addValue = ({ value, secondDigit, textAreaValue }) => {
  const hasDigitContainPoint = secondDigit?.toString()?.includes(signs['.']);
  const hasDigitHasSomeLength = secondDigit?.length > 0;
  const isDigitBiggerThenZero = Number(secondDigit) > 0;

  const isValueZero = value === numbers[0];
  const isValuePoint = value === signs['.'];

  const zeroCouldBeSign =
    !isDigitBiggerThenZero && !hasDigitHasSomeLength && isValueZero;
  const zeroCouldNotBeSign =
    isDigitBiggerThenZero && hasDigitHasSomeLength && isValueZero;
  const zeroAfterPointCouldBeSign =
    hasDigitContainPoint && hasDigitHasSomeLength && !isValueZero;
  const valueCouldBeSign = value !== numbers[0];

  const isValueCouldBeSign =
    zeroCouldBeSign ||
    zeroCouldNotBeSign ||
    zeroAfterPointCouldBeSign ||
    valueCouldBeSign;

  if (isValueCouldBeSign) {
    secondDigit += value;
  } else if (isDigitBiggerThenZero && !hasDigitContainPoint && isValuePoint) {
    secondDigit += value;
  }

  const lastIndexOfTextArea = textAreaValue.length - 1;
  const lastValueOfTextArea = textAreaValue[lastIndexOfTextArea];

  const isLastValueOfTextAreaSign = !!signs[lastValueOfTextArea];
  const isTextAreaIncludesSquare = lastValueOfTextArea
    ?.toString()
    ?.includes(signs['√']);

  const hapPushToTextarea =
    isLastValueOfTextAreaSign && !isTextAreaIncludesSquare;

  const secondDigitString = secondDigit?.toString();

  if (hapPushToTextarea) {
    textAreaValue.push(secondDigitString);
  } else {
    textAreaValue[lastIndexOfTextArea] = secondDigit;
  }

  return {
    secondDigit,
    textAreaValue,
  };
};
