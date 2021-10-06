// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.


function multiplyBy(vector, num) {
    return vector.map(x => x * num)
}

function multiplyByIfGreaterThanFive(vector, num) {
    return vector.map(x => x > 5 ? x * num : x)
}

let vector = [1, 2, 3, 4, 5, 6]
console.log(multiplyBy(vector, 3))
console.log(multiplyByIfGreaterThanFive(vector, 3))
