import { textAreaSelect } from '../../config.js';
import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';

export const addEqualSign = ({
  sum,
  firstDigit,
  secondDigit,
  sign,
  textAreaValue,
}) => {
  const isAllPropertiesAvailable = !!firstDigit && !!sign && !!secondDigit;

  if (isAllPropertiesAvailable) {
    sum = calculateSum(textAreaValue);
    firstDigit = sum;
    secondDigit = '';
    sign = '';
    while (textAreaValue?.length > 0) {
      textAreaValue.pop();
    }
    textAreaValue.push(firstDigit);
    printResult(textAreaValue, false, sum, textAreaSelect);

    return {
      sum,
      firstDigit,
      secondDigit,
      sign,
    };
  }

  return;
};
