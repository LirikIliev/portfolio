import {
  textAreaSelect,
  signs,
  valuesObject,
  textAreaValue,
} from '../../../config.js';
import {
  calculateSum,
  checkForSymbol,
  checkIsNumber,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

const symbolsToCheck = ['0.', '0', signs['√'], signs['%']];

const reduceSymbolsAndNumbers = (value) => {
  const singIndex = textAreaValue?.length - 2;
  const isValueLongLength = value?.length > 1;

  if (isValueLongLength) {
    textAreaValue[textAreaValue.length - 1] = value.slice(0, -1);
    valuesObject.secondDigit = value;
  } else {
    textAreaValue.pop();
    valuesObject.firstDigit = valuesObject.sum;
    valuesObject.secondDigit = '';
    printResult();
  }
  valuesObject.sign = textAreaValue[singIndex];
  calculateSum(textAreaValue);
  textAreaSelect.value = `${textAreaValue.join('')} \r\n${valuesObject.sum}`;
};

export const clearEveryNextValueOfCalculator = () => {
  const value = textAreaValue[textAreaValue?.length - 1];
  const isValueNumber = checkIsNumber(value);
  const hasSymbolIncluded = checkForSymbol(value, symbolsToCheck);

  if (isValueNumber || hasSymbolIncluded) {
    reduceSymbolsAndNumbers(value);
  } else {
    textAreaValue.pop();
    valuesObject.sign = '';
    printResult();
  }
};
