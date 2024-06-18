const palindromo = require('./palindromo');

test ('palindromo arara igual a true', () => {
    expect(palindromo('arara')).toBe(true);
});

test ('palindromo subi no onibus igual a true', () => {
    expect(palindromo('subi no onibus')).toBe(true);
});

test ('palindromo marrocos igual a false', () => {
    expect(palindromo('marrocos')).toBe(false);
});
