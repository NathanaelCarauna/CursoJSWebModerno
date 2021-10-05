// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console

function countNegatives(vector) {
    let negatives = 0
    vector.forEach(x => x < 0 ? negatives++ : negatives)
    return negatives
}

vector = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
console.log(countNegatives(vector))