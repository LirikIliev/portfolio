import { ZERO_DOT, numbers, signs, valuesObject } from '../../../config.js';

export const addValue = ({ value, hasDot }) => {
  const hasLength = !!valuesObject.firstDigit?.length > 0;
  // const hasValue = !!valuesObject.firstDigit > 0;
  const isValueNull = value === numbers[0];
  const isValueDot = value === signs['.'];

  if (!hasDot && !hasLength && isValueDot) {
    valuesObject.firstDigit = ZERO_DOT;
    return;
  } else if (!hasLength && isValueNull) {
    valuesObject.firstDigit = value;
    return;
  } else {
    valuesObject.firstDigit += value;
  }
};
