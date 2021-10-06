// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function printOdds(start = 0, end = 100) {
    if (end < start) {
        [start, end] = [end, start];
    }
    for (let i = start; i <= end; i++) {
        if (!(i % 2 == 0)) {
            console.log(i)
        }
    }
}

printOdds(10, 15)
console.log('-----------')
printOdds(15, 10)

