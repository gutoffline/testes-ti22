const isPalindrome = require('./palindromo');

test ('Palindrome da palavra Arara',()=>{
    expect (isPalindrome('arara')).toBe(true);
});