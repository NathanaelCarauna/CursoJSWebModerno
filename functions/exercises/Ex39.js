// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

function changeElements(vectorA, vectorB) {
    if (vectorA.length == vectorB.length) {
        for (let i = 0; i < vectorA.length; i++) {
            vectorA[i] = vectorA[i] + vectorB[i];
            vectorB[i] = vectorA[i] - vectorB[i]
            vectorA[i] = vectorA[i] - vectorB[i]
        }

    } else {
        console.log("Vector with different sizes")
    }
    console.log("New vector A: " + vectorA);
    console.log("New vector B: " + vectorB);
}

let vectorA = [1, 2, 3]
let vectorB = [4, 5, 6]

changeElements(vectorA, vectorB)