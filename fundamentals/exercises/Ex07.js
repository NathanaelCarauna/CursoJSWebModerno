// 07) Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.
// Exemplos:
// estaEntre(10, 9, 50) // retornará true
// estaEntre(16, 100, 160) // retornará false
// estaEntre(3, 3, 150) // retornará false
// estaEntre(3, 3, 150, true) // retornará true

function isBetween(number, min, max, inclusive = false) {
    return inclusive ? number >= min && number <= max : number > min && number < max;
}

console.log(isBetween(10, 9, 50))
console.log(isBetween(16, 100, 160))
console.log(isBetween(3, 3, 150))
console.log(isBetween(3, 3, 150, true))