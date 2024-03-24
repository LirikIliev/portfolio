import { signs, textAreaValue, valuesObject } from '../../config.js';
import { checkForSymbol } from '../../utils/auxiliaryFunctions.js';

import { addValue } from './extractedFunctionality/addValue.js';
import { minusPlus } from './extractedFunctionality/minusPlus.js';
import { squareRoot } from './extractedFunctionality/squareRoot.js';

export const calculateBeforeSign = () => {
  const value = valuesObject.eventValue;
  const hasDigitNotIncludesSquare = !!valuesObject.firstDigit
    ?.toString()
    ?.includes('√');
  const hacDigitIncludesPercent = !!valuesObject.firstDigit
    ?.toString()
    ?.includes(signs['%']);
  const valueSquareRoot = value === signs['√'];
  const valuePlusMinus = value === signs['±'];
  const hasDot = checkForSymbol(textAreaValue, [signs['.']]);

  if (valuePlusMinus) {
    minusPlus();
  } else if (valueSquareRoot || hasDigitNotIncludesSquare) {
    squareRoot({
      digitSquareRoot: hasDigitNotIncludesSquare,
      value,
    });
  } else if (!hacDigitIncludesPercent) {
    addValue({
      value,
      hasDot,
    });
  }

  textAreaValue.pop();
  textAreaValue.push(valuesObject.firstDigit);
};
