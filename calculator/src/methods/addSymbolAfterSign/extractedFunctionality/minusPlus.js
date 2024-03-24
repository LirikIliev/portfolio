import {
  reversedSigns,
  signs,
  textAreaValue,
  valuesObject,
} from '../../../config.js';

export const addMinusPlus = () => {
  const isSignPositiveOrNegative =
    valuesObject.sign === signs['+'] || valuesObject.sign === signs['-'];
  const isSignProperForMinusPlusLogic =
    valuesObject.sign !== signs['-'] && valuesObject.sign !== signs['+'];
  if (isSignPositiveOrNegative) {
    valuesObject.sign = reversedSigns[valuesObject.sign];
    textAreaValue.splice(textAreaValue.length - 2, 1, valuesObject.sign);
  } else if (isSignProperForMinusPlusLogic) {
    valuesObject.secondDigit = signs['±'](valuesObject.secondDigit);
    textAreaValue.splice(textAreaValue.length - 1, 1, valuesObject.secondDigit);
  }
};
