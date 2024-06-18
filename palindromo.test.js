const palin = require('./palindromo');


test('palindromo Arara para true',()=>{
    expect( palin("Arara")).toBe(true);
});

test('palindromo Subi no ônibus para true', ()=>{
    expect(palin("Subi no ônibus")).toBe(true);
})

