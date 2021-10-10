// 29) Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
// Exemplos:
// segundoMaior([12, 16, 1, 5]) // retornará 12
// segundoMaior([8, 4, 5, 6]) // retornará 6

function secondGreater(arr) {
    return arr.sort((a, b) => b - a)[1]
}

console.log(secondGreater([12, 16, 1, 5]))
console.log(secondGreater([8, 4, 5, 6]))