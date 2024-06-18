const isPalindrome = require('./palindromo');

test ('Palindrome da palavra Arara',()=>{
    expect (isPalindrome('arara')).toBe(true);
});

test ('Palindrome da palavra Subi no ônibus',()=>{
    expect (isPalindrome('Subi no ônibus')).toBe(true);
});