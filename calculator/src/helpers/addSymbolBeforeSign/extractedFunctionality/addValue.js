import { numbers, signs } from '../../../config.js';

export const addValue = ({ firstDigit, value, hasDot }) => {
  const hasValue = firstDigit?.length > 0;
  const isValueNull = value === numbers[0];
  const isValueDot = value === signs['.'];

  if (isValueNull && !hasValue) {
    return (firstDigit = '');
  }

  if (isValueNull && hasValue) {
    return (firstDigit += value);
  } else if (isValueDot && hasValue && !hasDot) {
    return (firstDigit += value);
  }

  return (firstDigit += value);
};
