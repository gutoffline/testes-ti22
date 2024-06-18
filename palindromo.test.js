const isPalindrome = require('./palindromo');

test('Palindromo arara para dar true', () => {
    expect(isPalindrome('arara')).toBe(true);
})

test('Palindromo Subi no ônibus para dar true', () => {
    expect(isPalindrome('Subi no ônibus')).toBe(true);
})

test('Palindromo Marrocos para dar false', () => {
    expect(isPalindrome('Marrocos')).toBe(false);
})
