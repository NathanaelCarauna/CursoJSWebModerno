// 21) Criar uma função que receba um array de números e retorne o menor número desse array.
// Exemplos:
// menorNumero([10, 5, 35, 65]) // retornará 5
// menorNumero([5, -15, 50, 3]) // retornará -15

function lesserNumber(arr) {
    arr = arr.sort((a, b) => a - b)
    return arr[0];
}

console.log(lesserNumber([10, 5, 35, 65]))
console.log(lesserNumber([5, -15, 50, 3]))