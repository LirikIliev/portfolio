import { textAreaValue } from '../../config.js';
import { clearEveryNextValueOfCalculator } from './extractedFunctionality/clearEveryNextValueOfCalculator.js';
import { clearFirstValueOfCalculator } from './extractedFunctionality/clearFirstValueOfCalculator.js';

export const deleteFunctionality = () => {
  const isValueLongLength = textAreaValue?.length >= 2;
  if (isValueLongLength) {
    clearEveryNextValueOfCalculator();
  } else {
    clearFirstValueOfCalculator();
  }
};
