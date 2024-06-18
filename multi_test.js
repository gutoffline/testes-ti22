const multiplica = require('./multiplica'); 

test('multiplica 3 x 4 para dar 12 ', () => {
    expect(multiplica (3, 4)).toBe(12);

} ); 

test('multiplica -1 x -1 para dar 1 ', () => {
    expect(multiplica (-1, -1)).toBe(1);
});


test ('multiplica 0 x 0 para dar 0 ', () => {
    expect (multiplica (0,0)).toBe(0);

});