import { textAreaValue, valuesObject } from '../../config.js';
import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';

export const addEqualSign = () => {
  const isAllPropertiesAvailable =
    !!valuesObject.firstDigit &&
    !!valuesObject.sign &&
    !!valuesObject.secondDigit;

  if (isAllPropertiesAvailable) {
    valuesObject.sum = calculateSum(textAreaValue);
    valuesObject.firstDigit = valuesObject.sum.toString();
    valuesObject.secondDigit = '';
    valuesObject.sign = '';

    while (textAreaValue?.length > 0) {
      textAreaValue.pop();
    }
    textAreaValue.push(valuesObject.firstDigit);
    printResult({ truthy: false });
  }

  return;
};
