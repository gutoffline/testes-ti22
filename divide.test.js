const div = require('./divide');

test('dividir 10 / 2 para dar 5', ()=>{
    expect(div(10,2)).toBe(5);
})

test('dividir 9 / 3 para dar 3', ()=>{
    expect(div(9,3)).toBe(3);
})

