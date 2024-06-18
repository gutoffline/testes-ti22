const multiplica = require('./multiplica');

test('multiplica 3 * 4 para dar 12', () => {
  expect(multiplica(3, 4)).toBe(12);
});

