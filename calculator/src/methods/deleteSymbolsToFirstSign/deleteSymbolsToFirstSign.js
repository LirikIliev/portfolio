import { clearEveryNextValueOfCalculator } from './extractedFunctionality/clearEveryNextValueOfCalculator.js';
import { clearFirstValueOfCalculator } from './extractedFunctionality/clearFirstValueOfCalculator.js';

export const deleteFunctionality = ({
  textAreaValue,
  sign,
  sum,
  secondDigit,
  firstDigit,
}) => {
  const isValueLongLength = textAreaValue?.length >= 2;
  if (isValueLongLength) {
    const deleteEveryNextValueOfCalculator = clearEveryNextValueOfCalculator({
      sign,
      textAreaValue,
      secondDigit,
      sum,
      firstDigit,
    });
    sum = deleteEveryNextValueOfCalculator.sum;
    firstDigit = deleteEveryNextValueOfCalculator.firstDigit;
    secondDigit = deleteEveryNextValueOfCalculator.secondDigit;
    sign = deleteEveryNextValueOfCalculator.sign;
  } else {
    const deleteFirstValueOfCalculator = clearFirstValueOfCalculator({
      textAreaValue,
      firstDigit,
      sum,
    });
    firstDigit = deleteFirstValueOfCalculator.firstDigit;
    sum = deleteFirstValueOfCalculator.sum;
  }

  return {
    sign,
    sum,
    secondDigit,
    firstDigit,
  };
};
