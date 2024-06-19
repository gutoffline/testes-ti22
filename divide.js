function divide(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida');
    }
    return a / b;
}
//teste
module.exports = divide;
