import { signs, numbers } from '../../config.js';
import {
  action,
  calculateSum,
  printResult,
} from '../../methods/auxiliaryFunctions.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');

const availableDigit = ({ firstDigit, textAreaValue, sum }) => {
  firstDigit = action['±'](firstDigit);
  textAreaValue.pop();
  textAreaValue.push(firstDigit);
  sum = calculateSum(textAreaValue);
  printResult(textAreaValue, true, sum, textAreaSelect);

  return { firstDigit, textAreaValue };
};

const digitAndValueSquareRoot = ({
  sign,
  firstDigit,
  digitSquareRoot,
  textAreaValue,
  sum,
  value,
}) => {
  if (!sign && !firstDigit && !digitSquareRoot) {
    firstDigit += value;
    textAreaValue.push(value);
    printResult(textAreaValue, false, sum, textAreaSelect);
  } else if (value !== signs['√'] && !sign && digitSquareRoot) {
    firstDigit += value;
    textAreaValue.pop();
    textAreaValue.push(firstDigit);
    sum = calculateSum(textAreaValue);
    printResult(textAreaValue, true, sum, textAreaSelect);
  }

  return {
    firstDigit,
    textAreaValue,
  };
};

const addFirstDigit = ({ firstDigit, value, hasDot }) => {
  const hasValue = firstDigit?.length > 0;
  const isValueNull = value === numbers[0];
  const isValueDot = value === signs['.'];

  if (isValueNull && !hasValue) {
    return (firstDigit = '');
  }

  if (isValueNull && hasValue) {
    return (firstDigit += value);
  } else if (isValueDot && hasValue && !hasDot) {
    return (firstDigit += value);
  }

  return (firstDigit += value);
};

export const calculateBeforeSign = ({
  value,
  firstDigit,
  sign,
  textAreaValue,
  sum,
}) => {
  const hasDigitNotIncludesSquare = !!firstDigit?.toString()?.includes('√');
  const hacDigitIncludesPercent = !!firstDigit
    ?.toString()
    ?.includes(signs['%']);
  const valueSquareRoot = value === signs['√'];

  const hasDot = firstDigit?.toString()?.includes('.');
  if (value === signs['±']) {
    const updatedValues = availableDigit({
      firstDigit,
      textAreaValue,
      sum,
    });
    firstDigit = updatedValues.firstDigit;
    textAreaValue = updatedValues.textAreaValue;
  } else if (valueSquareRoot || hasDigitNotIncludesSquare) {
    const digitAndValueSquare = digitAndValueSquareRoot({
      sign,
      firstDigit,
      digitSquareRoot: hasDigitNotIncludesSquare,
      textAreaValue,
      sum,
      value,
    });
    firstDigit = digitAndValueSquare.firstDigit;
    textAreaValue = digitAndValueSquare.textAreaValue;
  } else if (!hacDigitIncludesPercent) {
    firstDigit = addFirstDigit({ firstDigit, value, hasDot });
  }
  textAreaValue.pop();
  textAreaValue.push(firstDigit);

  return {
    firstDigit,
    sign,
  };
};
