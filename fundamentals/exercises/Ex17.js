// 17) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
// Exemplos:
// somarNumeros([10, 10, 10]) // retornará 30
// somarNumeros([15, 15, 15, 15]) // retornará 60

function sumNumbers(numbers) {
    return numbers.reduce((acumulator, val) => acumulator + val)
}

console.log(sumNumbers([10, 10, 10]))
console.log(sumNumbers([15, 15, 15, 15]))