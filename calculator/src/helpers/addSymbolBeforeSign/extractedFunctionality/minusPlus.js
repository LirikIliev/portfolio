import {
  action,
  calculateSum,
  printResult,
} from '../../../methods/auxiliaryFunctions.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');

export const minusPlus = ({ firstDigit, textAreaValue, sum }) => {
  firstDigit = action['±'](firstDigit);
  textAreaValue.pop();
  textAreaValue.push(firstDigit);
  sum = calculateSum(textAreaValue);
  printResult(textAreaValue, true, sum, textAreaSelect);

  return { firstDigit, textAreaValue };
};
