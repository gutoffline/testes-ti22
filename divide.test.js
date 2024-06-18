const div = require('./divide');

test('dividir 10 / 2 para dar 5', ()=>{
    expect(div(10,2)).toBe(5);
})
