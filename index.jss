function calculateBinary() {
    const binary1 = document.getElementById('binary1').value;
    const binary2 = document.getElementById('binary2').value;
    const operation = document.getElementById('operation').value;

    let decimal1 = parseInt(binary1, 2);
    let decimal2 = parseInt(binary2, 2);
    let result;

    if (isNaN(decimal1) || isNaN(decimal2)) {
        document.getElementById('resultBinary').innerText = "Result: Invalid binary input";
        return;
    }

    switch (operation) {
        case '+':
            result = decimal1 + decimal2;
            break;
        case '-':
            result = decimal1 - decimal2;
            break;
        case '*':
            result = decimal1 * decimal2;
            break;
        case '/':
            result = decimal2 !== 0 ? decimal1 / decimal2 : 'Cannot divide by zero';
            break;
    }

    document.getElementById('resultBinary').innerText = "Result: " + (result !== 'Cannot divide by zero' ? result.toString(2) : result);
}

function convertToDecimal() {
    const binary = document.getElementById('binaryToDecimal').value;
    const decimal = parseInt(binary, 2);

    if (isNaN(decimal)) {
        document.getElementById('resultDecimal').innerText = "Result: Invalid binary input";
    } else {
        document.getElementById('resultDecimal').innerText = "Result: " + decimal;
    }
}

function convertToBinary() {
    const decimal = parseInt(document.getElementById('decimalToBinary').value);

    if (isNaN(decimal)) {
        document.getElementById('resultBinaryConv').innerText = "Result: Invalid decimal input";
    } else {
        document.getElementById('resultBinaryConv').innerText = "Result: " + decimal.toString(2);
    }
}
