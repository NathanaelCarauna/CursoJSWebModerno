// 08) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.
// Exemplo:
// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

function multiply(a, b) {
    let initialValue = 0
    for (let i = 0; i < a; i++) {
        initialValue += b
    }
    return initialValue
}

console.log(multiply(5, 5))
console.log(multiply(0, 7))
console.log(multiply(7, 0))