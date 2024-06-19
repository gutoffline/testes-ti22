const soma = require('./soma');

test('soma 1 + 2 para dar 3', () => {
  expect(soma(1, 2)).toBe(3);
});



test('soma 5 + 10 para dar 15', ()=> {
  expect(soma(5, 5)).toBe(10);
});

test('soma 8 + 2 para dar 10', ()=> {
  expect(soma(8, 2)).toBe(10);
});

test('soma -1 + -1 para dar -2', ()=> {
  expect(soma(-1, -1)).toBe(-2);
});

test('soma 0 + 0 para dar 0', ()=> {
  expect(soma(0, 0)).toBe(0);
});


