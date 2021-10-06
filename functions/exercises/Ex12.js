// 2) Faça um algoritmo que calcule o fatorial de um número.

function factorial(number){
    if(number <= 1) return 1
    return number * factorial(number -1)
}

console.log(factorial(5))
console.log(factorial(3))
