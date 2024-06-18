function isPalindrome(str) {
    const limpo = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const invertido = limpo.split('').reverse().join('');
    return limpo === invertido;
}

module.exports = isPalindrome;