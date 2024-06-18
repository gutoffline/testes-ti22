const palin = require ('./palindromo') 

test (' palindromo arara para true ', () =>  {
    expect (palin("arara")).toBe(true);
})

test (" palindromo 'Subi no ônibus' para true ", () =>  {
    expect (palin("Subi no ônibus")).toBe(true);
})

test (" palindromo 'Marrocos' para true ", () =>  {
    expect (palin("Marrocos")).toBe(false);
}) 
.