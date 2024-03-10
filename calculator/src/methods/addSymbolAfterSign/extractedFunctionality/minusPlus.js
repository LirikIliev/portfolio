import { reversedSigns, signs } from '../../../config.js';
import { action } from '../../../utils/auxiliaryFunctions.js';

export const addMinusPlus = ({ sign, textAreaValue, secondDigit }) => {
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
