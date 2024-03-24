import {
  numbers,
  signs,
  textAreaValue,
  valuesObject,
} from '../../../config.js';

export const addValue = (value) => {
  const hasDigitContainPoint = valuesObject.secondDigit
    ?.toString()
    ?.includes(signs['.']);
  const hasDigitHasSomeLength = valuesObject.secondDigit?.length > 0;
  const isDigitBiggerThenZero = Number(valuesObject.secondDigit) > 0;

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
    valuesObject.secondDigit += value;
  } else if (isDigitBiggerThenZero && !hasDigitContainPoint && isValuePoint) {
    valuesObject.secondDigit += value;
  }

  const lastIndexOfTextArea = textAreaValue.length - 1;
  const lastValueOfTextArea = textAreaValue[lastIndexOfTextArea];

  const isLastValueOfTextAreaSign = !!signs[lastValueOfTextArea];
  const isTextAreaIncludesSquare = lastValueOfTextArea
    ?.toString()
    ?.includes(signs['√']);

  const hapPushToTextarea =
    isLastValueOfTextAreaSign && !isTextAreaIncludesSquare;

  const secondDigitString = valuesObject.secondDigit?.toString();

  if (hapPushToTextarea) {
    textAreaValue.push(secondDigitString);
  } else {
    textAreaValue[lastIndexOfTextArea] = valuesObject.secondDigit;
  }
};
