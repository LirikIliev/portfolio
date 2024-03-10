import { signs } from '../../config.js';

export const addSign = ({
  sign,
  textAreaValue,
  value,
  firstDigit,
  secondDigit,
  newSign,
  sum,
}) => {
  const lastTextAreaIndex = textAreaValue.length - 1;
  const lastValueOfTextArea = textAreaValue[lastTextAreaIndex];
  const isLastValueASign = !!signs[lastValueOfTextArea];

  const hasNoSign = sign !== newSign && !isLastValueASign;
  const hasSignChanged = sign !== newSign && isLastValueASign;
  const isSignMushBePushedToTextarea =
    (!sign && !isLastValueASign) || (signs[value] && !isLastValueASign);

  if (isSignMushBePushedToTextarea) {
    sign = newSign;
    textAreaValue.push(value);
    secondDigit = '';
  } else if (hasNoSign) {
    sign = newSign;
    textAreaValue.pop();
    textAreaValue.push(value);
  } else if (hasSignChanged) {
    sign = newSign;
    textAreaValue.splice(lastTextAreaIndex, 1, newSign);
    firstDigit = Number(sum);
    secondDigit = '';
  }

  return {
    sign,
    firstDigit,
    secondDigit,
  };
};
