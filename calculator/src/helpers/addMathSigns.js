import {
  calculationSigns,
  signs,
  textAreaValue,
  valuesObject,
} from '../config.js';

export const addSign = (currentSign) => {
  const value = valuesObject.eventValue;
  const lastTextAreaIndex = textAreaValue.length - 1;
  const lastValueOfTextArea = textAreaValue[lastTextAreaIndex];
  const isLastValueASign = !!signs[lastValueOfTextArea];

  if (!calculationSigns[currentSign]) {
    return;
  }

  const isSignMushBePushedToTextarea =
    valuesObject.sign !== currentSign && !isLastValueASign;
  const hasSignChanged = valuesObject.sign !== currentSign && isLastValueASign;
  const hasNoSign =
    (!valuesObject.sign && !isLastValueASign) ||
    (signs[value] && !isLastValueASign);

  if (hasNoSign) {
    valuesObject.sign = currentSign;
    textAreaValue.push(value);
    valuesObject.secondDigit = '';
  } else if (isSignMushBePushedToTextarea) {
    valuesObject.sign = currentSign;
    textAreaValue.pop();
    textAreaValue.push(value);
  } else if (hasSignChanged) {
    valuesObject.sign = currentSign;
    textAreaValue.splice(lastTextAreaIndex, 1, currentSign);
    valuesObject.firstDigit = Number(valuesObject.sum);
    valuesObject.secondDigit = '';
  }
};
