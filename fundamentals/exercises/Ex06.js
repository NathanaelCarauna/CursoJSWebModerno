// 06) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".
// Exemplos:
// Exercícios - Curso Fundamentos de Programação 2
// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
// inverso(-2000) // retornará 2000
// inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string"

function reverse(value) {
    let response
    if(typeof value === "boolean") 
        response = !value 
    else if(typeof value === 'number')
        response = -value
    else
        response = 'Boolean or numbers expected, but the parameter received was a ' + typeof value
    return response
}

console.log(reverse(true))
console.log(reverse('6'))
console.log(reverse(-2000))
console.log(reverse("programação"))