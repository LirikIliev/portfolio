import { textAreaValue, valuesObject } from '../../config.js';
import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';

export const sumUpdate = () => {
  valuesObject.sum = calculateSum(textAreaValue);
  printResult();
};
