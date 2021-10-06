// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

const fourOperations = (n1, n2) => {
    console.log(`Soma: ${n1} + ${n2} = ${n1 + n2}`)
    console.log(`Sbutração: ${n1} - ${n2} = ${n1 - n2}`)
    console.log(`Soma: ${n1} / ${n2} = ${n1 / n2}`)
    console.log(`Soma: ${n1} * ${n2} = ${n1 * n2}`)
}
fourOperations(4, 2)