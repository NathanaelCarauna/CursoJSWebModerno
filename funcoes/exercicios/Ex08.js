// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function evaluateMatchs(matchs) {
    const matchsArray = matchs.split(" ").map(x => Number(x))
    let greaterPontuation = matchsArray[0]
    let worsePontuationGame = 0
    let worsePontuation = Number.MAX_SAFE_INTEGER
    let recordingBreaks = 0    
    
    for(let element in matchsArray){                
        if (matchsArray[element] > greaterPontuation) {
            greaterPontuation = matchsArray[element]
            recordingBreaks++;
        }
        if (matchsArray[element] < worsePontuation) {
            worsePontuation = matchsArray[element]
            worsePontuationGame = Number(element) + 1.0
        }
    }    
    return [recordingBreaks, worsePontuationGame]
}

console.log(evaluateMatchs("10 20 20 8 25 3 0 30 1"))
console.log(evaluateMatchs("10 20 20 8 25 90 0 100 1"))