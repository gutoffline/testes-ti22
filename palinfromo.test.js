const isPalindrome = require('./palindromo');

test('Verificar se a palavra é um palindromo', () => {
    expect(isPalindrome('arara')).toBe(true);
  });

  test('Verificar se a palavra é um palindromo', () => {
    expect(isPalindrome('Subi no ônibus')).toBe(true);
  });

  test('Verificar se a palavra é um palindromo', () => {
    expect(isPalindrome('Marrocos')).toBe(false);
  });
  