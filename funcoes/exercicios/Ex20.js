// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function withdrawMoney(value) {
    let lvValue = value
    let notas = { n100: 0, n50: 0, n10: 0, n5: 0, n1: 0 }
    let notasValues = [100, 50, 10, 5, 1]
    notas.n100 = Math.floor(lvValue / 100)
    lvValue = lvValue % 100
    notas.n50 = Math.floor(lvValue / 50)
    lvValue = lvValue % 50
    notas.n10 = Math.floor(lvValue / 10)
    lvValue = lvValue % 10
    notas.n5 = Math.floor(lvValue / 5)
    lvValue = lvValue % 5
    notas.n1 = Math.floor(lvValue / 1)

    console.log(`Troco para: $ ${value.toFixed(2)}`)
    for (let i in notasValues) {
        let nota = Object.values(notas)[i]
        if (nota > 0)
            console.log(`\t${nota} nota(s) de R$ ${notasValues[i]}`)
    }
}

withdrawMoney(18)
withdrawMoney(189)