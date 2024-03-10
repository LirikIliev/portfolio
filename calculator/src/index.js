import {
  isInt,
  calculateSum,
  printResult,
} from './methods/auxiliaryFunctions.js';
import { numbers, signs } from './config.js';
import { calculateAfterSign } from './helpers/addSymbolAfterSign/calculateAfterSign.js';
import { calculateBeforeSign } from './helpers/addSymbolBeforeSign/calculateBeforeSign.js';
import { addSign } from './helpers/addMathSigns/addMathSigns.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');
const buttonBoxSelects = document.querySelectorAll(
  'nav#buttons div.calc-button'
);

const valueCheckObject = {
  ...numbers,
  '±': signs['±'],
  '√': signs['√'],
};

Array.from(buttonBoxSelects).forEach((button) =>
  button.addEventListener('click', calculate)
);

let firstDigit = '';
let secondDigit = '';
let sum = 0;
let sign = '';
const textAreaValue = [];

function calculate(e) {
  e.preventDefault();
  const value = e.target.getAttribute('value');
  const isSignCouldAdd = !!(value !== signs['.'] && signs[value] && firstDigit);

  if (valueCheckObject[value]) {
    // it's a part of code who handle first and next values after signs.
    if (sign) {
      const symbolsAfterSign = calculateAfterSign({
        value,
        secondDigit,
        sign,
        textAreaValue,
      });
      secondDigit = symbolsAfterSign.secondDigit;
      sign = symbolsAfterSign.sign;
    } else {
      const symbolsBeforeSign = calculateBeforeSign({
        value,
        firstDigit,
        sign,
        textAreaValue,
        sum,
      });
      firstDigit = symbolsBeforeSign?.firstDigit;
      sign = symbolsBeforeSign?.sign;
    }
  } else if (isSignCouldAdd) {
    // it's a part of code who respond for math signs.
    const addMinusSign = addSign({
      sign,
      textAreaValue,
      value,
      firstDigit,
      secondDigit,
      currentSign: signs[value],
      sum,
    });
    sign = addMinusSign?.sign;
    firstDigit = addMinusSign?.firstDigit;
    secondDigit = addMinusSign?.secondDigit;
  } else if (value === 'DEL') {
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
    return;
  } else if (value == '=') {
    if (firstDigit && sign && secondDigit) {
      sum = calculateSum(textAreaValue);
      firstDigit = sum;
      secondDigit = '';
      sign = '';
      while (textAreaValue.length > 0) {
        textAreaValue.pop();
      }
      textAreaValue.push(firstDigit);
      printResult(textAreaValue, false, sum, textAreaSelect);
    }
    return;
  } else if (value == '%') {
    if (
      (!sign && Number(textAreaValue[textAreaValue.length - 1])) ||
      (!sign &&
        textAreaValue[textAreaValue.length - 1] &&
        textAreaValue[textAreaValue.length - 1].includes('√') &&
        textAreaValue[textAreaValue.length - 1].length > 1 &&
        !textAreaValue[textAreaValue.length - 1].toString().includes('%'))
    ) {
      firstDigit += value;
      textAreaValue[textAreaValue.length - 1] += value;
    } else if (
      (sign && Number(textAreaValue[textAreaValue.length - 1])) ||
      (sign &&
        textAreaValue[textAreaValue.length - 1].includes('√') &&
        textAreaValue[textAreaValue.length - 1].length > 1 &&
        !textAreaValue[textAreaValue.length - 1].toString().includes('%'))
    ) {
      textAreaValue[textAreaValue.length - 1] += value;
      sum = calculateSum(textAreaValue);
      secondDigit += value;
      firstDigit = sum;
    }
  } else if (value == '.') {
    if (
      !secondDigit &&
      !sign &&
      isInt(textAreaValue[textAreaValue.length - 1]) &&
      !firstDigit.toString().includes('%')
    ) {
      if (firstDigit == '0' && value != '.') {
        firstDigit = value;
        textAreaValue[textAreaValue.length - 1] += value;
      } else if (!firstDigit && value == '.') {
        firstDigit = `${0}.`;
        if (textAreaValue.length > 0) {
          textAreaValue[textAreaValue.length - 1] += value;
        } else {
          textAreaValue[0] = '0.';
        }
      } else if (
        value != '0' ||
        Number(firstDigit) > 0 ||
        !firstDigit.toString().includes('.')
      ) {
        firstDigit += value;
        textAreaValue[textAreaValue.length - 1] += value;
      }
    } else if (
      secondDigit &&
      sign &&
      isInt(textAreaValue[textAreaValue.length - 1]) &&
      !secondDigit.toString().includes('%')
    ) {
      if (secondDigit == '0' && value != '.') {
        secondDigit = value;
        textAreaValue[textAreaValue.length - 1] += value;
      } else if (!secondDigit && value == '.') {
        secondDigit = `${0}.`;
        if (textAreaValue.length > 0) {
          textAreaValue[textAreaValue.length - 1] += value;
        } else {
          textAreaValue[0] = '0.';
        }
      } else if (
        value != '0' ||
        Number(secondDigit) > 0 ||
        !secondDigit.toString().includes('.')
      ) {
        secondDigit += value;
        textAreaValue[textAreaValue.length - 1] += value;
      }
    }
  }

  if (secondDigit) {
    sum = calculateSum(textAreaValue);
    printResult(textAreaValue, true, sum, textAreaSelect);
  } else {
    sum = calculateSum(textAreaValue);
    printResult(textAreaValue, true, sum, textAreaSelect);
  }
}
