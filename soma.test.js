const soma = require('./soma');

test('soma 1 + 2 para dar 3', () => {
  expect(soma(1, 2)).toBe(3);
});


test('soma 5 + 5 igual a 10', () => {
  expect(soma(5, 5)).toBe(10);
})
