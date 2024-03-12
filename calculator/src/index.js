import {
  isInt,
  calculateSum,
  printResult,
} from './utils/auxiliaryFunctions.js';
import {
  signs,
  calculationSigns,
  calculatorValues,
  textAreaSelect,
} from './config.js';
import { calculateAfterSign } from './methods/addSymbolAfterSign/calculateAfterSign.js';
import { calculateBeforeSign } from './methods/addSymbolBeforeSign/calculateBeforeSign.js';
import { deleteFunctionality } from './methods/deleteSymbolsToFirstSign/deleteSymbolsToFirstSign.js';
import { addSign } from './helpers/addMathSigns.js';

const buttonBoxSelects = document.querySelectorAll(
  'nav#buttons div.calc-button'
);

Array.from(buttonBoxSelects).forEach((button) =>
  button.addEventListener('click', calculate)
);

let firstDigit = '';
let secondDigit = '';
let sum = 0;
let sign = '';
const textAreaValue = [];

function calculate(event) {
  event.preventDefault();
  const value = event.target.getAttribute('value');
  const isSignCouldAdd = !!(calculationSigns[value] && firstDigit);

  if (calculatorValues[value]) {
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
    const deleteLeftSymbols = deleteFunctionality({
      textAreaValue,
      sign,
      sum,
      secondDigit,
      firstDigit,
    });
    sign = deleteLeftSymbols.sign;
    sum = deleteLeftSymbols.sum;
    secondDigit = deleteLeftSymbols.secondDigit;
    firstDigit = deleteLeftSymbols.firstDigit;
  } else if (value === '=') {
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
  } else if (value === '%') {
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
