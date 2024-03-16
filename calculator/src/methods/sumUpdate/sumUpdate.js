import { textAreaSelect } from '../../config.js';
import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';

export const sumUpdate = ({ textAreaValue, isSecondDigit, sum }) => {
  if (isSecondDigit) {
    sum = calculateSum(textAreaValue);
    printResult(textAreaValue, true, sum, textAreaSelect);
    return;
  }

  sum = calculateSum(textAreaValue);
  printResult(textAreaValue, true, sum, textAreaSelect);
};
