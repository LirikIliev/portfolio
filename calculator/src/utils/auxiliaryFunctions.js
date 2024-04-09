import {
  signs,
  textAreaSelect,
  textAreaValue,
  THE_SUM_SYMBOLS,
  valuesObject,
} from '../config.js';
import * as actions from './actions.js';

export const action = {
  [signs.x]: actions.multiply,
  [signs['÷']]: actions.divide,
  [signs['+']]: actions.sum,
  [signs['-']]: actions.subtract,
  [signs['√']]: actions.squareRoot,
  [signs['±']]: actions.reverse,
  '1%': actions.firstDigitPercent,
  '2%': actions.secondDigitPercent,
};

export function isInt(value) {
  const isValueNumber = checkIsNumber(value);
  if (!isValueNumber) {
    return NaN;
  }
  const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);
  const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);

  if (hasValueIncludesPercent || hasValueIncludesSquare) {
    value = value.split('');
    if (hasValueIncludesSquare) value.shift();
    if (hasValueIncludesPercent) value.pop();
    value = value.join('');
  }

  const hasValueIncludesPeriod = value && checkForSymbol(value, [signs['.']]);
  if (!hasValueIncludesPeriod) {
    return true;
  }
  return false;
}

function calculateCurrentSum(symbol, currentValue) {
  const sumToNumber = Number(valuesObject.sum);
  const currentValueToNumber = Number(currentValue);
  if (THE_SUM_SYMBOLS[symbol]) {
    valuesObject.sum = action[symbol](sumToNumber, currentValueToNumber);
  } else if (!symbol) {
    valuesObject.sum = Number(currentValue);
  }
}

const calculateSumWithPercentAndSquare = (value, index) => {
  value = value.toString();
  value = value.slice(0, value.length - 1);

  if (index > 0) {
    const square = action['√'](value);
    const percent = action['1%'](Number(square));
    valuesObject.sum += percent;
  } else {
    valuesObject.sum = Number(action['√'](value));
    valuesObject.sum = action['1%'](Number(valuesObject.sum));
  }
  value = value.split('');
  value.push('%');
  value = value.join('');
};

const calculateSumWithPercentOrSquare = (values, index) => {
  const hasValueIncludesPercent = checkForSymbol(values[index], [signs['%']]);
  const hasValueIncludesSquare = checkForSymbol(values[index], [signs['√']]);

  if (hasValueIncludesPercent) {
    if (index > 0) {
      values[index] = values[index].slice(0, values[index].length - 1);
      calculateCurrentSum(
        values[index - 1],
        action['2%'](Number(valuesObject.sum), Number(values[index]))
      );
      values[index] = values[index].split('');
      values[index].push('%');
      values[index] = values[index].join('');
      return;
    }
    values[index] = values[index].slice(0, values[index].length - 1);
    valuesObject.sum = action['1%'](Number(values[index]));
    values[index] = values[index].split('');
    values[index].push('%');
    values[index] = values[index].join('');
  } else if (hasValueIncludesSquare) {
    calculateCurrentSum(values[index - 1], Number(action['√'](values[index])));
  }
};

export function calculateSum(array) {
  for (let i = 0; i <= array.length - 1; i += 2) {
    const value = array[i].toString();
    const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);
    const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);

    if (hasValueIncludesPercent && hasValueIncludesSquare) {
      calculateSumWithPercentAndSquare(array[i], i);
    } else if (hasValueIncludesPercent || hasValueIncludesSquare) {
      calculateSumWithPercentOrSquare(array, i);
    } else {
      calculateCurrentSum(array[i - 1], array[i]);
    }
  }
}

export const printResult = () =>
  (textAreaSelect.value = `${textAreaValue.join('')} \r\n${valuesObject.sum}`);

export const checkForSymbol = (value, symbols) => {
  const isDataAvailable = !!value;
  const stringData = value?.toString();
  const isDataString = isDataAvailable ? typeof stringData === 'string' : false;
  if (Array.isArray(symbols) && symbols?.length > 0 && isDataString) {
    for (const symbol of symbols) {
      const hasSymbolIncluded = stringData?.includes(symbol);
      if (hasSymbolIncluded) return true;
    }
  }
  return false;
};

// to create better regex for select and extract number
const numberRegex = /^-?[0-9]\d*(\.\d+)?$/g;
export const checkIsNumber = (value) => {
  const stringValue = value?.toString();
  const checkValue = numberRegex.test(stringValue);
  if (checkValue) {
    const match = stringValue.match(numberRegex);
    const matchConcatenation = match.join('');
    return (
      typeof Number(matchConcatenation) === 'number' &&
      !isNaN(Number(matchConcatenation))
    );
  }

  return false;
};
