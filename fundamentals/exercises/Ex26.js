// 26) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.
// Exemplos:
// removerVogais("Cod3r") // retornará "Cd3r"
// removerVogais("Fundamentos") // retornará "Fndmnts"

function removeVowels(sentence){
    return sentence.replace(/([aeiou])/g, '')
}

console.log(removeVowels('Cod3r'))
console.log(removeVowels('Fundamentos'))