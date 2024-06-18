const multi = require('./multiplica');

test('multiplicar 3 * 4 para dar 12', ()=>{
    expect(multi(3,4)).toBe(12);
})

test('multiplicar -1 * -1 para dar 1', ()=>{
    expect(multi(-1,-1)).toBe(1);
})

