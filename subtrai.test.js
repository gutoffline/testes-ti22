const subtrai = require('./subtrai');

test('subtrai 5 - 2 igual a 3', () => {
    expect(subtrai(5, 2)).toBe(3);
});

test('subtrai 0 - 0 igual a 0', () => {
    expect(subtrai(0, 0)).toBe(0);
});

test('subtrai -2 - -2 igual a 0', () => {
    expect(subtrai(-2, -2)).toBe(0);
});
