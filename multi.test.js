const multiplica = require('./multiplica'); 

test (' multiplição 3 x 4 para dar 12 ', () => {
    expect(multiplica (3, 4)).toBe(12);

} ); 

const multiplica = require('./multiplica');

test (' multiplicação -1 x -1 para dar 1 ', () => {
    expect (multiplica (-1,-1)).toBe(-2);

});