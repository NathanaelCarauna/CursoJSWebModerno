// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function pairsOdds(vector) {
    let pairs = 0
    let odds = 0
    vector.forEach(x => x % 2 == 0 ? pairs++ : odds++)
    console.log(`Pairs: ${pairs}, odds: ${odds}`)
}

let vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
pairsOdds(vector)