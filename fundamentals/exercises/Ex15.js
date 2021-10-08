// 15) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.
// 💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
// por 2 é zero.
// Exemplos:
// receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
// receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]

function returnOnlyPairsOfIndexPair(array) {
    return array.filter((e, i) => e % 2 == 0 && i % 2 == 0);
}

let array = [1, 2, 3, 4]
console.log(returnOnlyPairsOfIndexPair(array))
array = [10, 70, 22, 43]
console.log(returnOnlyPairsOfIndexPair(array))