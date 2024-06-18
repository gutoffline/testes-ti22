const isPalindrome = require('./palindromo');

test('palindromo "arara" para dar true', ()=> {
    expect(isPalindrome('arara')).toBe(true);
});

test('palindrommo "subi no onibus" para dar true', ()=> {
    expect(isPalindrome('subi no onibus')).toBe(true);
});

test('palindromo "marrocos" para dar felse', ()=> {
    expect(isPalindrome('marrocos')).toBe(false);
})