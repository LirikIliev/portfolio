import { textAreaSelect, signs } from '../../../config.js';
import {
  calculateSum,
  checkForSymbol,
  checkIsNumber,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';
const symbolsToCheck = ['0.', '0', signs['√'], signs['%']];

const reduceSymbolsAndNumbers = ({
  sign,
  textAreaValue,
  value,
  firstDigit,
  secondDigit,
  sum,
}) => {
  const singIndex = textAreaValue?.length - 2;
  const isValueLongLength = value?.length > 1;

  if (isValueLongLength) {
    textAreaValue[textAreaValue.length - 1] = value.slice(0, -1);
    secondDigit = value;
  } else {
    textAreaValue.pop();
    firstDigit = sum;
    secondDigit = '';
    printResult(textAreaValue, true, sum, textAreaSelect);
  }
  sign = textAreaValue[singIndex];
  sum = calculateSum(textAreaValue);
  textAreaSelect.value = `${textAreaValue.join('')} \r\n${sum}`;

  return {
    sign,
    sum,
    firstDigit,
    secondDigit,
  };
};

export const clearEveryNextValueOfCalculator = ({
  sign,
  textAreaValue,
  secondDigit,
  sum,
  firstDigit,
}) => {
  const value = textAreaValue[textAreaValue?.length - 1];
  const isValueNumber = checkIsNumber(value);
  const hasSymbolIncluded = checkForSymbol(value, symbolsToCheck);
  if (isValueNumber || hasSymbolIncluded) {
    const symbolsAndNumbersReducer = reduceSymbolsAndNumbers({
      sum,
      sign,
      textAreaValue,
      value,
      firstDigit,
      secondDigit,
    });
    firstDigit = symbolsAndNumbersReducer.firstDigit;
    secondDigit = symbolsAndNumbersReducer.secondDigit;
    sign = symbolsAndNumbersReducer.sign;
    sum = symbolsAndNumbersReducer.sum;
  } else {
    textAreaValue.pop();
    sign = '';
    printResult(textAreaValue, true, sum, textAreaSelect);
  }

  return {
    sign,
    secondDigit,
    sum,
    firstDigit,
  };
};
