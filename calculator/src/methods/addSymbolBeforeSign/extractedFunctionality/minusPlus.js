import { textAreaValue, valuesObject } from '../../../config.js';
import {
  action,
  calculateSum,
  printResult,
} from '../../../utils/auxiliaryFunctions.js';

export const minusPlus = () => {
  valuesObject.firstDigit = action['±'](valuesObject.firstDigit);
  textAreaValue.pop();
  textAreaValue.push(valuesObject.firstDigit);
  calculateSum(textAreaValue);
  printResult({ truthy: true });
};
