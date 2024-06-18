const div = require('./divide');

test('dividir 10 / 2 para dar 5', ()=>{
    expect(div(10,2)).toBe(5);
})

test('dividir 9 / 3 para dar 3', ()=>{
    expect(div(9,3)).toBe(3);
})

test('dividir 1 / 0 para dar Divisão por zero não é permitido', ()=>{
    expect(() => div(1,0)).toThrow('Divisão por zero não é permitida');
})