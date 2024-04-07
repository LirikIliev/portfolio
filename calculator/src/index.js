import {
  signs,
  calculationSigns,
  CALCULATOR_VALUES,
  valuesObject,
  BUTTONS_EVENTS,
} from './config.js';
import { calculateAfterSign } from './methods/addSymbolAfterSign/calculateAfterSign.js';
import { calculateBeforeSign } from './methods/addSymbolBeforeSign/calculateBeforeSign.js';
import { deleteFunctionality } from './methods/deleteSymbolsToFirstSign/deleteSymbolsToFirstSign.js';
import { addSign } from './helpers/addMathSigns.js';
import { addEqualSign } from './methods/addEqualSign/addEqualSign.js';
import { addPercent } from './methods/addPercent/addPercent.js';
import { addPeriod } from './methods/addPeriod/addPeriod.js';
import { sumUpdate } from './methods/sumUpdate/sumUpdate.js';
import { checkIsNumber } from './utils/auxiliaryFunctions.js';
import { reverse } from './utils/actions.js';

// select every button into the calculator.
const buttonBoxSelects = document.querySelectorAll(
  'nav#buttons div.calc-button'
);
//set a event to can take value from each button into the calculator.
Array.from(buttonBoxSelects).forEach((button) =>
  button.addEventListener('click', calculate)
);

const valueCalculation = () => {
  if (!valuesObject.sign) {
    // it's a part of code who handle values before signs.
    calculateBeforeSign();
    return;
  }
  // it's a part of code who handle values after signs.
  calculateAfterSign();
};

const buttonEventsController = {
  [BUTTONS_EVENTS.DEL]: deleteFunctionality,
  [BUTTONS_EVENTS['=']]: addEqualSign,
  [BUTTONS_EVENTS['%']]: addPercent,
  [BUTTONS_EVENTS['.']]: addPeriod,
};
function calculate(event) {
  event.preventDefault();
  valuesObject.eventValue = event.target.getAttribute('value');
  const isSignCouldAdd =
    valuesObject.firstDigit && !!calculationSigns[valuesObject.eventValue];

  if (CALCULATOR_VALUES[valuesObject.eventValue]) {
    valueCalculation();
  } else if (isSignCouldAdd) {
    // it's a part of code who respond for math signs.
    addSign(signs[valuesObject.eventValue]);
  } else if (BUTTONS_EVENTS[valuesObject.eventValue]) {
    buttonEventsController[valuesObject.eventValue]();
  }

  sumUpdate();
}
