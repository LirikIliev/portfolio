import { signs } from '../../config.js';

import { addValue } from './extractedFunctionality/addValue.js';
import { minusPlus } from './extractedFunctionality/minusPlus.js';
import { squareRoot } from './extractedFunctionality/squareRoot.js';

export const calculateBeforeSign = ({
  value,
  firstDigit,
  sign,
  textAreaValue,
  sum,
}) => {
  const hasDigitNotIncludesSquare = !!firstDigit?.toString()?.includes('√');
  const hacDigitIncludesPercent = !!firstDigit
    ?.toString()
    ?.includes(signs['%']);
  const valueSquareRoot = value === signs['√'];

  const hasDot = firstDigit?.toString()?.includes('.');
  if (value === signs['±']) {
    const updatedValues = minusPlus({
      firstDigit,
      textAreaValue,
      sum,
    });
    firstDigit = updatedValues.firstDigit;
    textAreaValue = updatedValues.textAreaValue;
  } else if (valueSquareRoot || hasDigitNotIncludesSquare) {
    const digitAndValueSquare = squareRoot({
      sign,
      firstDigit,
      digitSquareRoot: hasDigitNotIncludesSquare,
      textAreaValue,
      sum,
      value,
    });
    firstDigit = digitAndValueSquare.firstDigit;
    textAreaValue = digitAndValueSquare.textAreaValue;
  } else if (!hacDigitIncludesPercent) {
    firstDigit = addValue({ firstDigit, value, hasDot });
  }
  textAreaValue.pop();
  textAreaValue.push(firstDigit);

  return {
    firstDigit,
    sign,
  };
};
