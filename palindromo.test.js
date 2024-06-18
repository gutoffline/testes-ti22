const isPalindromo = require('./Palindromo');

test('Palindrome da palavra Arara', () => {
    expect(isPalindromo('arara')).toBe(true);
  });

  test('Palindrome da palavra subi no onibus', () => {
    expect(isPalindromo('subi no onibus')).toBe(true);
  });

  

  