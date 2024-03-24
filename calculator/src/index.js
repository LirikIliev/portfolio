import {
  signs,
  calculationSigns,
  CALCULATOR_VALUES,
  valuesObject,
} from './config.js';
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

function calculate(event) {
  event.preventDefault();
  valuesObject.eventValue = event.target.getAttribute('value');
  const isSignCouldAdd =
    valuesObject.firstDigit && !!calculationSigns[valuesObject.eventValue];

  if (CALCULATOR_VALUES[valuesObject.eventValue]) {
    // it's a part of code who handle values after signs.
    if (valuesObject.sign) {
      calculateAfterSign();
    } else {
      // it's a part of code who handle values before signs.
      calculateBeforeSign();
    }
  } else if (isSignCouldAdd) {
    // it's a part of code who respond for math signs.
    addSign(signs[valuesObject.eventValue]);
  } else if (valuesObject.eventValue === 'DEL') {
    deleteFunctionality();
  } else if (valuesObject.eventValue === '=') {
    addEqualSign();
  } else if (valuesObject.eventValue === '%') {
    addPercent();
  } else if (valuesObject.eventValue === '.') {
    addPeriod();
  }

  sumUpdate();
}
