// 05) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
// Exemplos:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") // retornará false
// maiorOuIgual('5', 1) // retornará false

function greaterOrEquals(a, b) {
    let response;
    typeof a === "number" && typeof b === "number" ? response = a >= b : response = false
    return response
}

console.log(greaterOrEquals(0, 0))
console.log(greaterOrEquals(0, '0'))
console.log(greaterOrEquals('5', 1))