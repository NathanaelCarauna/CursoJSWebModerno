// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function countBetween10and20(vector) {
    let inside = 0
    let out = 0
    vector.forEach(x => x >= 10 && x <= 20 ? inside++ : out++)
    console.log(`Inside: ${inside}, out: ${out}`)
}

let vector = [7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
countBetween10and20(vector)