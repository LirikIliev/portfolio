export const textAreaSelect = document.querySelector(
  'textarea#textarea-screen'
);
export const valuesObject = {
  firstDigit: '',
  secondDigit: '',
  sum: '',
  sign: '',
  eventValue: '',
};
export const textAreaValue = [];

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
  '-': signs['+'],
  '+': signs['-'],
};
export const calculationSigns = {
  '+': signs['+'],
  '-': signs['-'],
  x: signs.x,
  '÷': signs['÷'],
};
export const CALCULATOR_VALUES = {
  ...numbers,
  '±': signs['±'],
  '√': signs['√'],
};

export const BUTTON_EVENTS = {
  DEL: 'DEL',
  '%': '%',
  '=': '=',
  '.': '.',
};

export const THE_SUM_SYMBOLS = {
  [signs['+']]: signs['+'],
  [signs['-']]: signs['-'],
  [signs['x']]: signs['x'],
  [signs['÷']]: signs['±'],
};
