// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function average(vector) {
    return vector.reduce((partial, x) => (partial + x), 0) / vector.length;
}

vector = [1, 2, 3, 4, 5]
console.log(average(vector))