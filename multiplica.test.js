const multiplica = require('./multiplica');

test ('Multiplica 3 * 4 para dar 12',() =>{
    expect (multiplica(3,4)).toBe(12);
});

test ('Multiplica (-1) * (-1) para 1',() =>{
    expect (multiplica(-1,-1)).toBe(1);
});

test ('Multiplica 0 * 5 para dar 0',() => {
    expect (multiplica(0,5)).toBe(0);
})