// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcPayment(correntMonth, value) {
    let period = correntMonth - 1
    let totalPayment = value * Math.pow(1 + 0.05, period)
    return `R$ ${totalPayment.toFixed(2)}`
}

console.log(calcPayment(4, 100))