import { signs, valuesObject, textAreaValue } from '../../config.js';
import { addValue } from './extractedFunctionality/addValue.js';
import { addMinusPlus } from './extractedFunctionality/minusPlus.js';
import { addSquareRoot } from './extractedFunctionality/squareRoot.js';

export const calculateAfterSign = () => {
  const value = valuesObject.eventValue;
  const isValueSquare = value === signs['√'];
  const isValuePlusMinus = value === signs['±'];

  const hacDigitIncludesPercent = valuesObject.secondDigit
    ?.toString()
    ?.includes(signs['%']);

  const hasMinusPlusSignBeAdd = isValuePlusMinus && valuesObject.secondDigit;
  const hasSquareRootBeAdded = isValueSquare && !valuesObject.secondDigit;
  const hadAddMoreDigit = !isValueSquare && !hacDigitIncludesPercent;

  if (hasMinusPlusSignBeAdd) {
    addMinusPlus();
  } else if (hasSquareRootBeAdded) {
    addSquareRoot({
      value,
      isValueSquare,
    });
  } else if (hadAddMoreDigit) {
    addValue(value);
  }
};
