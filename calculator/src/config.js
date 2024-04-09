export const textAreaSelect = document.querySelector(
  'textarea#textarea-screen'
);

export const valuesObject = {
  firstDigit: '',
  secondDigit: '',
  sum: 0,
  sign: '',
  eventValue: '',
  errors: '',
};

export const textAreaValue = [];
export const DIGIT_REGEX = /-?\d+(\.\d+)?/g;
export const ZERO_DOT = '0.';
export const numbers = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  0: '0',
};
export const signs = {
  '+': '+',
  '-': '-',
  x: 'x',
  '÷': '÷',
  '±': '±',
  '√': '√',
  '%': '%',
  '.': '.',
};
export const reversedSigns = {
  [signs['-']]: signs['+'],
  [signs['+']]: signs['-'],
};
export const calculationSigns = {
  [signs['+']]: signs['+'],
  [signs['-']]: signs['-'],
  [signs['x']]: signs['x'],
  [signs['÷']]: signs['÷'],
};
export const CALCULATOR_VALUES = {
  ...numbers,
  [signs['±']]: signs['±'],
  [signs['√']]: signs['√'],
};

export const BUTTONS_EVENTS = {
  DEL: 'DEL',
  [signs['%']]: signs['%'],
  '=': '=',
  [signs['.']]: signs['.'],
};

export const THE_SUM_SYMBOLS = {
  [signs['+']]: signs['+'],
  [signs['-']]: signs['-'],
  [signs['x']]: signs['x'],
  [signs['÷']]: signs['±'],
};
