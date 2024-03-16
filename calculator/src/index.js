import { signs, calculationSigns, calculatorValues } from './config.js';
import { calculateAfterSign } from './methods/addSymbolAfterSign/calculateAfterSign.js';
import { calculateBeforeSign } from './methods/addSymbolBeforeSign/calculateBeforeSign.js';
import { deleteFunctionality } from './methods/deleteSymbolsToFirstSign/deleteSymbolsToFirstSign.js';
import { addSign } from './helpers/addMathSigns.js';
import { addEqualSign } from './methods/addEqualSign/addEqualSign.js';
import { addPercent } from './methods/addPercent/addPercent.js';
import { addPeriod } from './methods/addPeriod/addPeriod.js';
import { sumUpdate } from './methods/sumUpdate/sumUpdate.js';

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
    // it's a part of code who handle values after signs.
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
      // it's a part of code who handle values before signs.
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
    sign = deleteLeftSymbols?.sign;
    sum = deleteLeftSymbols?.sum;
    secondDigit = deleteLeftSymbols?.secondDigit;
    firstDigit = deleteLeftSymbols?.firstDigit;
  } else if (value === '=') {
    const equalResults = addEqualSign({
      sum,
      firstDigit,
      secondDigit,
      sign,
      textAreaValue,
    });
    sum = equalResults?.sum;
    firstDigit = equalResults?.firstDigit;
    secondDigit = equalResults?.secondDigit;
    sign = equalResults?.sign;
  } else if (value === '%') {
    const percent = addPercent({
      sign,
      textAreaValue,
      firstDigit,
      secondDigit,
      sum,
      value,
    });
    sum = percent.sum;
    firstDigit = percent.firstDigit;
    secondDigit = percent.secondDigit;
  } else if (value === '.') {
    const period = addPeriod({
      firstDigit,
      secondDigit,
      textAreaValue,
      value,
      sign,
    });
    firstDigit = period.firstDigit;
    secondDigit = period.secondDigit;
  }

  sumUpdate({ textAreaValue, isSecondDigit: true, sum });
}
