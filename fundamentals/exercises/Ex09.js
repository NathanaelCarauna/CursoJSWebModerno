// 09) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.
// Exemplos:
// repetir("código", 2) // retornará ["código", "código"]
// repetir(7, 3) // retornará [7, 7, 7]

function repeat(value, times){
    let array = []
    for(var i=0; i<times; i++){
        array.push(value)
    }
    return array
}

console.log(repeat('código', 2))
console.log(repeat(7, 3))