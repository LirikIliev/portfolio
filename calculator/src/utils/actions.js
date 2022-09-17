export function sum(sum1, sum2) {
    let result = sum1 + sum2
    return result;
};

export function subtract(sum1, sum2) {
    let result = sum1 - sum2
    return result;
};

export function multiply(sum1, sum2) {
    let result = sum1 * sum2
    return result;
};

export function divide(sum1, sum2) {
    let result = sum1 / sum2
    return result;
};

export function firstDigitPercent(sum) {
    if (
        sum.toString()
            .includes('√')
    ) {
        sum = sum.split('');
        sum.shift();
        sum = sum.join('');

        if (sum.includes('%')) {
            sum = sum.split('');
            sum.pop();
            sum = sum.join('');
        };
    };
    let result = Number(sum) / 100
    return result;
};

export function secondDigitPercent(sum1, sum2) {
    if (
        sum1.toString()
            .includes('√')
    ) {
        sum1 = sum1.split('');
        sum1.shift();
        sum1 = sum1.join('');

        if (sum1.includes('%')) {
            sum1 = sum1.split('');
            sum1.pop();
            sum1 = sum1.join('');
        };
    };
    if (
        sum2.toString()
            .includes('√')
    ) {
        sum2 = sum2.split('');
        sum2.shift();
        sum2 = sum2.join('');

        if (sum2.includes('%')) {
            sum2 = sum2.split('');
            sum2.pop();
            sum2 = sum2.join('');
        };
    };

    let result = Number(sum1) * Number(sum2) / 100;
    return result;
};

export function afterPercent(sum, percent) {
    let result = sum - percent;
    return result;
};

export function reverse(sum) {
    let result;
    if (
        sum
            .toString()
            .includes('%')
        ||
        sum
            .toString()
            .includes('√')) {
        if (sum.includes('%')) {
            sum = calcReverse(Number(sum.slice(0, sum.length - 1)));
            result = sum + '%';
        } else if (sum.includes('√')) {
            sum = calcReverse(Number(sum.slice(1)));
            result = '√' + sum;
        };
    } else {
        return sum = calcReverse(Number(sum));
    };
    return result;

    function calcReverse(sum) {
        let reversed;
        if (sum > 0) {
            reversed = Number(-sum);
        } else {
            reversed = Math.abs(sum);
        };
        return reversed
    };
};

export function squareRoot(sum) {
    let result = Math.sqrt(Number(sum.slice(1)));
    result = result
        .toString()
        .split('');
    result = result.join('');
    return result;
};