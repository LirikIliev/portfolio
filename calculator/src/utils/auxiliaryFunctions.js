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
}

function calculateTheSum(sum, symbol, currentDigit) {
  const sumNumber = Number(sum);
  const currentDigitNumber = Number(currentDigit);
  if (THE_SUM_SYMBOLS[symbol]) {
    return (sum = action[symbol](sumNumber, currentDigitNumber));
  } else if (!symbol) {
    return (sum += Number(currentDigit));
  }
}

const calculateSumWithPercentAndSquare = (value, index, sum) => {
  value = value.toString();
  value = value.slice(0, value.length - 1);

  if (index > 0) {
    const square = action['√'](value);
    const percent = action['1%'](Number(square));
    sum += percent;
  } else {
    sum += Number(action['√'](value));
    sum = action['1%'](Number(sum));
  }
  value = value.split('');
  value.push('%');
  value = value.join('');

  return sum;
};

const calculateSumWithPercentOrSquare = (values, index, sum) => {
  const hasValueIncludesPercent = checkForSymbol(values[index], [signs['%']]);
  const hasValueIncludesSquare = checkForSymbol(values[index], [signs['√']]);

  if (hasValueIncludesPercent) {
    if (index > 0) {
      values[index] = values[index].slice(0, values[index].length - 1);
      sum = calculateTheSum(
        values[index - 1],
        action['2%'](Number(sum), Number(values[index]))
      );
      values[index] = values[index].split('');
      values[index].push('%');
      values[index] = values[index].join('');
      return;
    }
    values[index] = values[index].slice(0, values[index].length - 1);
    sum += action['1%'](Number(values[index]));
    values[index] = values[index].split('');
    values[index].push('%');
    values[index] = values[index].join('');
  } else if (hasValueIncludesSquare) {
    sum = calculateTheSum(
      sum,
      values[index - 1],
      Number(action['√'](values[index]))
    );
  }

  return sum;
};

export function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i += 2) {
    const value = array[i].toString();
    const hasValueIncludesPercent = checkForSymbol(value, [signs['%']]);
    const hasValueIncludesSquare = checkForSymbol(value, [signs['√']]);
    if (hasValueIncludesPercent && hasValueIncludesSquare) {
      sum = calculateSumWithPercentAndSquare(array[i], i, sum);
    } else if (hasValueIncludesPercent || hasValueIncludesSquare) {
      sum = calculateSumWithPercentOrSquare(array, i, sum);
    } else {
      sum = calculateTheSum(sum, array[i - 1], array[i]);
    }
  }

  return sum;
}

export const printResult = () =>
  (textAreaSelect.value = `${textAreaValue.join('')} \r\n${valuesObject.sum}`);

export const checkForSymbol = (data, symbols) => {
  const isDataAvailable = !!data;
  const stringData = data?.toString();
  const isDataString = isDataAvailable ? typeof stringData === 'string' : false;
  if (Array.isArray(symbols) && symbols?.length > 0 && isDataString) {
    for (const symbol of symbols) {
      const hasSymbolIncluded = stringData?.includes(symbol);
      if (!hasSymbolIncluded) return false;
    }
    return true;
  }
};

export const checkIsNumber = (value) =>
  typeof Number(value) === 'number' && !isNaN(Number(value));
