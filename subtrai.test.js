const subtrai = require('./subtrai');

test('subtrai 5 - 2 para dar 3', () => {
    expect(subtrai(5, 2)).toBe(3);
  });

  test('subtrai 0 - 0 para dar 0', () => {
    expect(subtrai(0, 0)).toBe(0);
  });

  test('subtrai -2 - -2 para dar 0', () => {
    expect(subtrai(-2, -2)).toBe(0);
  });

