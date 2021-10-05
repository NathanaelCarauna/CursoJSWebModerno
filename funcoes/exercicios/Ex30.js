// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function greaterAndLesser(vector) {
    let greater = vector[0]
    let lesser = vector[0]
    vector.forEach(x => x > greater ? greater = x : greater)
    vector.forEach(x => x < lesser ? lesser = x : lesser)
    console.log(`Greater: ${greater} Lesser: ${lesser}`)
}
let vector = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
greaterAndLesser(vector)