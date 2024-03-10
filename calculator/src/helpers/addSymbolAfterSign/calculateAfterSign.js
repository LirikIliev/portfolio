import { signs, reversedSigns, numbers } from '../../config.js';
import { action } from '../../methods/auxiliaryFunctions.js';

const addMinusPlusOperator = ({ sign, textAreaValue, secondDigit }) => {
  const isSignPositiveOrNegative = sign === signs['+'] || sign === signs['-'];
  const isSignProperForMinusPlusLogic =
    sign !== signs['-'] && sign !== signs['+'];
  if (isSignPositiveOrNegative) {
    sign = reversedSigns[sign];
    textAreaValue.splice(textAreaValue.length - 2, 1, sign);
  } else if (isSignProperForMinusPlusLogic) {
    secondDigit = action['±'](secondDigit);
    textAreaValue.splice(textAreaValue.length - 1, 1, secondDigit);
  }

  return { sign, secondDigit, textAreaValue };
};

const addSquareRootToDigit = ({
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

const addValuesToDigit = ({ value, secondDigit, textAreaValue }) => {
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

export const calculateAfterSign = ({
  value,
  secondDigit,
  sign,
  textAreaValue,
}) => {
  const isValueSquare = value === signs['√'];
  const isValuePlusMinus = value === signs['±'];

  const hacDigitIncludesPercent = secondDigit?.toString()?.includes(signs['%']);

  const hasMinusPlusSignBeAdd = isValuePlusMinus && secondDigit;
  const hasSquareRootBeAdded = isValueSquare && !secondDigit;
  const hadAddMoreDigit = !isValueSquare && !hacDigitIncludesPercent;

  if (hasMinusPlusSignBeAdd) {
    const minusPlusSign = addMinusPlusOperator({
      sign,
      textAreaValue,
      secondDigit,
    });
    sign = minusPlusSign.sign;
    secondDigit = minusPlusSign.secondDigit;
    textAreaValue = minusPlusSign.textAreaValue;
  } else if (hasSquareRootBeAdded) {
    const squareRoot = addSquareRootToDigit({
      sign,
      textAreaValue,
      secondDigit,
      value,
      isValueSquare,
    });
    secondDigit = squareRoot.secondDigit;
    textAreaValue = squareRoot.textAreaValue;
  } else if (hadAddMoreDigit) {
    const zeroToSecondDigit = addValuesToDigit({
      value,
      secondDigit,
      textAreaValue,
    });
    secondDigit = zeroToSecondDigit.secondDigit;
    textAreaValue = zeroToSecondDigit.textAreaValue;
  }

  return {
    secondDigit,
    sign,
  };
};
