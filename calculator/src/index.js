import { isInt, action, calculateSum, printResult } from './utils/auxiliaryFunctions.js';

const textAreaSelect = document.querySelector('textarea#textarea-screen');
const buttonBoxSelect = document.querySelector('body main.main-section section.calculator-body section.button-section nav#buttons');
buttonBoxSelect.addEventListener('click', calculate);

let firstDigit = '';
let secondDigit = '';
let sum = 0;
let func;
const textAreaValue = [];

function calculate(e) {
    e.preventDefault();

    if (e.target.tagName === 'DIV') {
        const value = e.target.getAttribute('value');
        if (value == '1' || value == '2' || value == '3' || value == '4' || value == '5'
            || value == '6' || value == '7' || value == '8' || value == '9' || value == '0'
            || value == '√' || value == '±') {
            if (func) {
                if (value == '±') {
                    if (secondDigit) {
                        if (func == '+') {
                            func = '-';
                            textAreaValue.splice(textAreaValue.length - 2, 1, func);
                        } else if (func == 'x') {
                            secondDigit = action['±'](secondDigit);
                            textAreaValue.splice(textAreaValue.length - 1, 1, secondDigit);
                        } else if (func == '÷') {
                            secondDigit = action['±'](secondDigit);
                            textAreaValue.splice(textAreaValue.length - 1, 1, secondDigit);
                        } else if (func == '-') {
                            func = '+';
                            textAreaValue.splice(textAreaValue.length - 2, 1, func);
                        };
                    };

                } else if (value == '√' || secondDigit
                    .toString()
                    .includes('√')) {
                    if (value == '√' && !secondDigit
                        .toString()
                        .includes('√') && !secondDigit && func) {
                        secondDigit += value;
                        textAreaValue.push(value);
                    } else if (secondDigit && secondDigit
                        .toString()
                        .includes('√') && func) {
                        secondDigit += value;
                        textAreaValue.pop();
                        textAreaValue.push(secondDigit);
                    };

                } else {
                    if (!secondDigit && value == '0') {
                        secondDigit += value;
                    } else if (secondDigit.toString()[0] !== '0' && value == '0') {
                        secondDigit += value;
                    } else if (value !== '0' || secondDigit.toString().includes('.')) {
                        secondDigit += value;
                    }

                    if (Number(textAreaValue[textAreaValue.length - 1]) || textAreaValue[textAreaValue.length - 1].includes('.')
                        || textAreaValue[textAreaValue.length - 1] == '0') {
                        textAreaValue.splice(textAreaValue.length - 1, 1, secondDigit);
                    } else {
                        textAreaValue.push(secondDigit);
                    };

                };
            } else {
                if (value == '±') {
                    if (firstDigit) {
                        firstDigit = action['±'](firstDigit);
                        textAreaValue.pop();
                        textAreaValue.push(firstDigit);
                        sum = calculateSum(textAreaValue);
                        printResult(textAreaValue, true, sum, textAreaSelect);
                        return;
                    } else {
                        return;
                    }

                } else if (value == '√' || firstDigit
                    .toString()
                    .includes('√')) {
                    if (!func && !firstDigit && !firstDigit
                        .toString()
                        .includes('√')) {
                        firstDigit += value;
                        textAreaValue.push(value);
                        printResult(textAreaValue, false, sum, textAreaSelect);
                        return;
                    } else if (value != '√' && !func && firstDigit
                        .toString()
                        .includes('√')) {
                        firstDigit += value;
                        textAreaValue.pop();
                        textAreaValue.push(firstDigit);
                        sum = calculateSum(textAreaValue);
                        printResult(textAreaValue, true, sum, textAreaSelect);
                        return;
                    };

                } else {
                    if (!firstDigit && value == '0') {
                        firstDigit += value;
                    } else if (firstDigit.toString()[0] != '0' && value == '0') {
                        firstDigit += value;
                    } else if (value !== '0' || firstDigit.toString().includes('.')) {
                        firstDigit += value;
                    };
                };
                textAreaValue.pop();
                textAreaValue.push(firstDigit);
            };
        } else if (value == '+' && firstDigit || value == '+' && firstDigit === 0) {
            if (!func) {
                func = '+';
                textAreaValue.push(value);
            } else if (func != '+' && !Number(textAreaValue[textAreaValue.length - 1])) {
                func = '+';
                textAreaValue.pop();
                textAreaValue.push(value);
            } else if (Number(textAreaValue[textAreaValue.length - 1]) || textAreaValue[textAreaValue.length - 1].includes('%')
                || textAreaValue[textAreaValue.length - 1].includes('√')) {
                func = '+';
                textAreaValue.push(value);
                firstDigit = Number(sum);
                secondDigit = '';
            };
        } else if (value == '-' && firstDigit || value == '-' && firstDigit === 0) {
            if (!func) {
                func = '-';
                textAreaValue.push(value);
            } else if (func != '-' && !Number(textAreaValue[textAreaValue.length - 1])) {
                func = '-';
                textAreaValue.pop();
                textAreaValue.push(value);
            } else if (Number(textAreaValue[textAreaValue.length - 1])) {
                func = '-';
                textAreaValue.push(value);
                firstDigit = Number(sum);
                secondDigit = '';
            };
        } else if (value == 'x' && firstDigit || value == 'x' && firstDigit === 0) {
            if (!func) {
                func = 'x';
                textAreaValue.push(value);
            } else if (func != 'x' && !Number(textAreaValue[textAreaValue.length - 1])) {
                func = 'x';
                textAreaValue.pop();
                textAreaValue.push(value);
            } else if (Number(textAreaValue[textAreaValue.length - 1])) {
                func = 'x';
                textAreaValue.push(value);
                firstDigit = Number(sum);
                secondDigit = '';
            };
        } else if (value == '÷' && firstDigit || value == '÷' && firstDigit === 0) {
            if (!func) {
                func = '÷';
                textAreaValue.push(value);
            } else if (func != '÷' && !Number(textAreaValue[textAreaValue.length - 1])) {
                func = '÷';
                textAreaValue.pop();
                textAreaValue.push(value);
            } else if (Number(textAreaValue[textAreaValue.length - 1])) {
                func = '÷';
                textAreaValue.push(value);
                firstDigit = Number(sum);
                secondDigit = '';
            };
        } else if (value == 'DEL') {
            if (textAreaValue.length >= 2) {
                if (Number(textAreaValue[textAreaValue.length - 1]) || textAreaValue[textAreaValue.length - 1].includes('0.')
                    || textAreaValue[textAreaValue.length - 1].includes('0') || textAreaValue[textAreaValue.length - 1].includes('√')
                    || textAreaValue[textAreaValue.length - 1].includes('%')) {
                    func = textAreaValue[textAreaValue.length - 2];
                    let lastNumber = (textAreaValue[textAreaValue.length - 1]).toString();
                    if (Number(textAreaValue[textAreaValue.length - 1]) < 0) {
                        if (lastNumber.length > 2) {
                            textAreaValue[textAreaValue.length - 1] = textAreaValue[textAreaValue.length - 1]
                                .toString();
                            textAreaValue[textAreaValue.length - 1] = textAreaValue[textAreaValue.length - 1]
                                .split('')
                            textAreaValue[textAreaValue.length - 1]
                                .pop();
                            textAreaValue[textAreaValue.length - 1] = textAreaValue[textAreaValue.length - 1]
                                .join('');
                            sum = calculateSum(textAreaValue);
                            secondDigit = textAreaValue[textAreaValue.length - 1];
                            printResult(textAreaValue, true, sum, textAreaSelect);
                        } else {
                            textAreaValue
                                .pop();
                            sum = calculateSum(textAreaValue);
                            secondDigit = '';
                            printResult(textAreaValue, true, sum, textAreaSelect);
                        };
                    } else {
                        if (textAreaValue[textAreaValue.length - 1].length > 1) {
                            textAreaValue[textAreaValue.length - 1] = textAreaValue[textAreaValue.length - 1]
                                .split('')
                            textAreaValue[textAreaValue.length - 1]
                                .pop();
                            textAreaValue[textAreaValue.length - 1] = textAreaValue[textAreaValue.length - 1]
                                .join('');
                            sum = calculateSum(textAreaValue);
                            secondDigit = textAreaValue[textAreaValue.length - 1];
                            textAreaSelect.value = `${textAreaValue
                                .join('')} \r\n${sum}`;
                        } else {
                            textAreaValue
                                .pop();
                            textAreaSelect.value = `${textAreaValue
                                .join('')} \r\n${sum}`;
                            sum = calculateSum(textAreaValue);
                            firstDigit = sum;
                            secondDigit = '';
                            printResult(textAreaValue, true, sum, textAreaSelect);
                        };
                    };
                } else {
                    textAreaValue
                        .pop();
                    func = '';
                    printResult(textAreaValue, true, sum, textAreaSelect);
                };

            } else {
                if (textAreaValue.length == 1) {
                    if (textAreaValue[0].length > 1 || Number(textAreaValue[0]) < 0) {
                        if (Number(textAreaValue[0]) < 0) {
                            let splittedLastNumber = (textAreaValue[0])
                                .toString()
                                .split('');
                            splittedLastNumber
                                .pop();
                            splittedLastNumber = splittedLastNumber
                                .join('');
                            textAreaValue[0] = splittedLastNumber;
                            textAreaSelect.value = `${splittedLastNumber}`;
                            firstDigit = Number(splittedLastNumber);
                            sum = Number(splittedLastNumber);
                        } else {
                            let splittedLastNumber = textAreaValue[0]
                                .split('');
                            splittedLastNumber
                                .pop();
                            splittedLastNumber = splittedLastNumber
                                .join('');
                            textAreaValue[0] = splittedLastNumber;
                            textAreaSelect.value = `${splittedLastNumber}`;
                            firstDigit = splittedLastNumber;
                            sum = Number(splittedLastNumber);
                        };
                    } else {
                        textAreaValue.pop();
                        textAreaSelect.value = '';
                        firstDigit = '';
                        sum = 0;
                    };
                };

            };
            return;

        } else if (value == '=') {
            if (firstDigit && func && secondDigit) {
                sum = calculateSum(textAreaValue);
                firstDigit = sum;
                secondDigit = '';
                func = '';
                while (textAreaValue.length > 0) {
                    textAreaValue.pop();
                };
                textAreaValue.push(firstDigit);
                printResult(textAreaValue, false, sum, textAreaSelect);
            };
            return;
        } else if (value == '%') {
            if (!func
                && Number(textAreaValue[textAreaValue.length - 1]) ||
                !func
                && textAreaValue[textAreaValue.length - 1]
                && textAreaValue[textAreaValue.length - 1].includes('√')
                && textAreaValue[textAreaValue.length - 1].length > 1
                && !textAreaValue[textAreaValue.length - 1]
                    .toString()
                    .includes('%')) {
                firstDigit += value;
                textAreaValue[textAreaValue.length - 1] += value;
            } else if (func
                && Number(textAreaValue[textAreaValue.length - 1]) ||
                func
                && textAreaValue[textAreaValue.length - 1].includes('√')
                && textAreaValue[textAreaValue.length - 1].length > 1
                && !textAreaValue[textAreaValue.length - 1]
                    .toString()
                    .includes('%')) {
                textAreaValue[textAreaValue.length - 1] += value;
                sum = calculateSum(textAreaValue);
                secondDigit += value;
                firstDigit = sum;
            };
        } else if (value == '.') {
            if (!secondDigit && !func && isInt(textAreaValue[textAreaValue.length - 1]) && !firstDigit.toString().includes('%')) {
                if (firstDigit == '0' && value != '.') {
                    firstDigit = value;
                    textAreaValue[textAreaValue.length - 1] += value;
                } else if (!firstDigit && value == '.') {
                    firstDigit = `${0}.`;
                    if (textAreaValue.length > 0) {
                        textAreaValue[textAreaValue.length - 1] += value;
                    } else {
                        textAreaValue[0] = '0.';
                    };
                } else if (value != '0' || Number(firstDigit) > 0 || !firstDigit
                    .toString()
                    .includes('.')) {
                    firstDigit += value;
                    textAreaValue[textAreaValue.length - 1] += value;
                };
            } else if (secondDigit && func && isInt(textAreaValue[textAreaValue.length - 1]) && !secondDigit.toString().includes('%')) {
                if (secondDigit == '0' && value != '.') {
                    secondDigit = value;
                    textAreaValue[textAreaValue.length - 1] += value;
                } else if (!secondDigit && value == '.') {
                    secondDigit = `${0}.`;
                    if (textAreaValue.length > 0) {
                        textAreaValue[textAreaValue.length - 1] += value;
                    } else {
                        textAreaValue[0] = '0.';
                    };
                } else if (value != '0' || Number(secondDigit) > 0 || !secondDigit
                    .toString()
                    .includes('.')) {
                    secondDigit += value;
                    textAreaValue[textAreaValue.length - 1] += value;
                };
            }
        }

        if (secondDigit) {
            sum = calculateSum(textAreaValue);
            printResult(textAreaValue, true, sum, textAreaSelect);
        } else {
            sum = calculateSum(textAreaValue);
            printResult(textAreaValue, true, sum, textAreaSelect);
        };
    };
};