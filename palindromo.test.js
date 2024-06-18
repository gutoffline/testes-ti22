const palindromo = require('./palindromo');


test('palindromo "arara" para dar "true"', () => {
  expect(palindromo("Arara")).toBe(true);
});

test('palindromo "Subi no ônibus" para dar "true"', () => {
    expect(palindromo("Subi no ônibus")).toBe(true);
  });
