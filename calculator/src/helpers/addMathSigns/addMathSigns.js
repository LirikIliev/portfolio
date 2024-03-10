import { signs } from '../../config.js';

export const addSign = ({
  sign,
  textAreaValue,
  value,
  firstDigit,
  secondDigit,
  currentSign,
  sum,
}) => {
  const lastTextAreaIndex = textAreaValue.length - 1;
  const lastValueOfTextArea = textAreaValue[lastTextAreaIndex];
  const isLastValueASign = !!signs[lastValueOfTextArea];

  const isSignMushBePushedToTextarea =
    sign !== currentSign && !isLastValueASign;
  const hasSignChanged = sign !== currentSign && isLastValueASign;
  const hasNoSign =
    (!sign && !isLastValueASign) || (signs[value] && !isLastValueASign);

  if (hasNoSign) {
    sign = currentSign;
    textAreaValue.push(value);
    secondDigit = '';
  } else if (isSignMushBePushedToTextarea) {
    sign = currentSign;
    textAreaValue.pop();
    textAreaValue.push(value);
  } else if (hasSignChanged) {
    sign = currentSign;
    textAreaValue.splice(lastTextAreaIndex, 1, currentSign);
    firstDigit = Number(sum);
    secondDigit = '';
  }

  return {
    sign,
    firstDigit,
    secondDigit,
  };
};
