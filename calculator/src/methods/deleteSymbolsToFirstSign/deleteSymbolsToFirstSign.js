import { textAreaSelect } from '../../config.js';
import { calculateSum, printResult } from '../../utils/auxiliaryFunctions.js';

export const deleteSymbolsToFirstSign = ({
  textAreaValue,
  sign,
  sum,
  secondDigit,
  firstDigit,
}) => {
  if (textAreaValue.length >= 2) {
    if (
      Number(textAreaValue[textAreaValue.length - 1]) ||
      textAreaValue[textAreaValue.length - 1].includes('0.') ||
      textAreaValue[textAreaValue.length - 1].includes('0') ||
      textAreaValue[textAreaValue.length - 1].includes('√') ||
      textAreaValue[textAreaValue.length - 1].includes('%')
    ) {
      sign = textAreaValue[textAreaValue.length - 2];
      let lastNumber = textAreaValue[textAreaValue.length - 1].toString();
      if (Number(textAreaValue[textAreaValue.length - 1]) < 0) {
        if (lastNumber.length > 2) {
          textAreaValue[textAreaValue.length - 1] =
            textAreaValue[textAreaValue.length - 1].toString();
          textAreaValue[textAreaValue.length - 1] =
            textAreaValue[textAreaValue.length - 1].split('');
          textAreaValue[textAreaValue.length - 1].pop();
          textAreaValue[textAreaValue.length - 1] =
            textAreaValue[textAreaValue.length - 1].join('');
          sum = calculateSum(textAreaValue);
          secondDigit = textAreaValue[textAreaValue.length - 1];
          printResult(textAreaValue, true, sum, textAreaSelect);
        } else {
          textAreaValue.pop();
          sum = calculateSum(textAreaValue);
          secondDigit = '';
          printResult(textAreaValue, true, sum, textAreaSelect);
        }
      } else {
        if (textAreaValue[textAreaValue.length - 1].length > 1) {
          textAreaValue[textAreaValue.length - 1] =
            textAreaValue[textAreaValue.length - 1].split('');
          textAreaValue[textAreaValue.length - 1].pop();
          textAreaValue[textAreaValue.length - 1] =
            textAreaValue[textAreaValue.length - 1].join('');
          sum = calculateSum(textAreaValue);
          secondDigit = textAreaValue[textAreaValue.length - 1];
          textAreaSelect.value = `${textAreaValue.join('')} \r\n${sum}`;
        } else {
          textAreaValue.pop();
          textAreaSelect.value = `${textAreaValue.join('')} \r\n${sum}`;
          sum = calculateSum(textAreaValue);
          firstDigit = sum;
          secondDigit = '';
          printResult(textAreaValue, true, sum, textAreaSelect);
        }
      }
    } else {
      textAreaValue.pop();
      sign = '';
      printResult(textAreaValue, true, sum, textAreaSelect);
    }
  } else {
    if (textAreaValue.length == 1) {
      if (textAreaValue[0].length > 1 || Number(textAreaValue[0]) < 0) {
        if (Number(textAreaValue[0]) < 0) {
          let splittedLastNumber = textAreaValue[0].toString().split('');
          splittedLastNumber.pop();
          splittedLastNumber = splittedLastNumber.join('');
          textAreaValue[0] = splittedLastNumber;
          textAreaSelect.value = `${splittedLastNumber}`;
          firstDigit = Number(splittedLastNumber);
          sum = Number(splittedLastNumber);
        } else {
          let splittedLastNumber = textAreaValue[0].split('');
          splittedLastNumber.pop();
          splittedLastNumber = splittedLastNumber.join('');
          textAreaValue[0] = splittedLastNumber;
          textAreaSelect.value = `${splittedLastNumber}`;
          firstDigit = splittedLastNumber;
          sum = Number(splittedLastNumber);
        }
      } else {
        textAreaValue.pop();
        textAreaSelect.value = '';
        firstDigit = '';
        sum = 0;
      }
    }
  }

  return {
    sign,
    sum,
    secondDigit,
    firstDigit,
  };
};
