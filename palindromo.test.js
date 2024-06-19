const isPalindromo = require('./palindromo');

test('Palindrome da palavra Arara', () => {
  expect(isPalindromo('Arara')).toBe(true);
});