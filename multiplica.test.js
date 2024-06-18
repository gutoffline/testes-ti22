const multiplica = require('./multiplica');

test('multiplica 3 * 4 para dar 12', () => {
    expect(multiplica(3, 4)).toBe(12);
  });

  test('multiplica -1 * -1 para dar 1', () => {
    expect(multiplica(-1, -1)).toBe(1);
  });