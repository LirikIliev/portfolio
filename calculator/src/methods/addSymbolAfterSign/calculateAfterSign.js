import { signs } from '../../config.js';
import { addValue } from './extractedFunctionality/addValue.js';
import { addMinusPlus } from './extractedFunctionality/minusPlus.js';
import { addSquareRoot } from './extractedFunctionality/squareRoot.js';

export const calculateAfterSign = ({
  value,
  secondDigit,
  sign,
  textAreaValue,
}) => {
  const isValueSquare = value === signs['√'];
  const isValuePlusMinus = value === signs['±'];

  const hacDigitIncludesPercent = secondDigit?.toString()?.includes(signs['%']);

  const hasMinusPlusSignBeAdd = isValuePlusMinus && secondDigit;
  const hasSquareRootBeAdded = isValueSquare && !secondDigit;
  const hadAddMoreDigit = !isValueSquare && !hacDigitIncludesPercent;

  if (hasMinusPlusSignBeAdd) {
    const minusPlusSign = addMinusPlus({
      sign,
      textAreaValue,
      secondDigit,
    });
    sign = minusPlusSign.sign;
    secondDigit = minusPlusSign.secondDigit;
    textAreaValue = minusPlusSign.textAreaValue;
  } else if (hasSquareRootBeAdded) {
    const squareRoot = addSquareRoot({
      sign,
      textAreaValue,
      secondDigit,
      value,
      isValueSquare,
    });
    secondDigit = squareRoot.secondDigit;
    textAreaValue = squareRoot.textAreaValue;
  } else if (hadAddMoreDigit) {
    const zeroToSecondDigit = addValue({
      value,
      secondDigit,
      textAreaValue,
    });
    secondDigit = zeroToSecondDigit.secondDigit;
    textAreaValue = zeroToSecondDigit.textAreaValue;
  }

  return {
    secondDigit,
    sign,
  };
};
