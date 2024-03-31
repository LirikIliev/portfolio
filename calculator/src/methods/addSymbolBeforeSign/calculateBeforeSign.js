import { signs, textAreaValue, valuesObject } from '../../config.js';
import { checkForSymbol } from '../../utils/auxiliaryFunctions.js';

import { addValue } from './extractedFunctionality/addValue.js';
import { minusPlus } from './extractedFunctionality/minusPlus.js';
import { squareRoot } from './extractedFunctionality/squareRoot.js';

export const calculateBeforeSign = () => {
  const value = valuesObject.eventValue;
  const hasDigitNotIncludesSquare = checkForSymbol(valuesObject.firstDigit, [
    signs['√'],
  ]);
  const hasDigitIncludesPercent = checkForSymbol(valuesObject.firstDigit, [
    signs['%'],
  ]);

  if (hasDigitIncludesPercent) return;

  const isValueSquareRoot = value === signs['√'];
  const isValuePlusMinus = value === signs['±'];
  const hasDot = checkForSymbol(textAreaValue, [signs['.']]);

  if (isValuePlusMinus) {
    minusPlus();
  } else if (isValueSquareRoot || hasDigitNotIncludesSquare) {
    squareRoot({
      hasDigitNotIncludesSquare,
      value,
    });
  } else if (!hasDigitIncludesPercent) {
    addValue({
      value,
      hasDot,
    });
  }

  textAreaValue.pop();
  textAreaValue.push(valuesObject.firstDigit);
};
