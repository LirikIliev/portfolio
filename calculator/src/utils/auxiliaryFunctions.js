import * as actions from './actions.js';

export const action = {
  x: actions.multiply,
  '÷': actions.divide,
  '+': actions.sum,
  '-': actions.subtract,
  '√': actions.squareRoot,
  '1%': actions.firstDigitPercent,
  '2%': actions.secondDigitPercent,
  '±': actions.reverse,
};

export function isInt(value) {
  // var regexp = /(^\d+.$)||(^\.\d+$)||(^\d+$)||(^\d+\.\d+$)/g;
  if (value) {
    if (value.toString().includes('%') || value.toString().includes('√')) {
      if (value.toString().includes('√')) {
        value = value.split('');
        value.shift();
        value = value.join('');
      }
      if (value.toString().includes('%')) {
        value = value.split('');
        value.pop();
        value = value.join('');
      }
    }
  }
  if (!value || !value.toString().includes('.')) {
    return true;
  } else {
    return false;
  }
}

export function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i += 2) {
    arr[i] = arr[i].toString();
    if (arr[i].includes('%') && arr[i].includes('√')) {
      arr[i] = arr[i].slice(0, arr[i].length - 1);
      if (i > 0) {
        let square = action['√'](arr[i]);
        let percent = action['1%'](Number(square));
        sum += percent;
      } else {
        sum += Number(action['√'](arr[i]));
        sum = action['1%'](Number(sum));
      }
      arr[i] = arr[i].split('');
      arr[i].push('%');
      arr[i] = arr[i].join('');
    } else if (arr[i].includes('%') || arr[i].includes('√')) {
      if (arr[i].includes('%')) {
        if (i == 0) {
          arr[i] = arr[i].slice(0, arr[i].length - 1);
          sum += action['1%'](Number(arr[i]));
          arr[i] = arr[i].split('');
          arr[i].push('%');
          arr[i] = arr[i].join('');
        } else {
          arr[i] = arr[i].slice(0, arr[i].length - 1);
          sum = sumTheSum(
            Number(sum),
            arr[i - 1],
            action['2%'](Number(sum), Number(arr[i]))
          );
          arr[i] = arr[i].split('');
          arr[i].push('%');
          arr[i] = arr[i].join('');
        }
      } else if (arr[i].includes('√')) {
        sum = sumTheSum(sum, arr[i - 1], Number(action['√'](arr[i])));
      }
    } else {
      sum = sumTheSum(sum, arr[i - 1], arr[i]);
    }

    function sumTheSum(sum, symbol, currentDigit) {
      if (symbol == '+') {
        return (sum = action['+'](Number(sum), Number(currentDigit)));
      } else if (symbol == '-') {
        return (sum = action['-'](Number(sum), Number(currentDigit)));
      } else if (symbol == 'x') {
        return (sum = action['x'](Number(sum), Number(currentDigit)));
      } else if (symbol == '÷') {
        return (sum = action['÷'](Number(sum), Number(currentDigit)));
      } else if (!symbol) {
        return (sum += Number(currentDigit));
      }
    }
  }
  return sum;
}

export function printResult(array, truthy, sum, selectedElement) {
  if ((array.length > 2 && truthy) || (array.length < 2 && truthy)) {
    selectedElement.value = `${array.join('')} \r\n${sum}`;
  } else {
    selectedElement.value = `${array.join('')}`;
  }
}
