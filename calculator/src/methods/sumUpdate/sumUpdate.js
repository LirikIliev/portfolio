import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';
import { textAreaValue } from '../../config.js';

export const sumUpdate = () => {
  calculateSum(textAreaValue);
  printResult();
};
