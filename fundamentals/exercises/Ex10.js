// 10) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
// Exemplos:
// simboloMais(2) // retornará "++"
// simboloMais(4) // retornará "++++"

function simbolPlus(x){
    return '+'.repeat(x)
}

console.log(simbolPlus(2))
console.log(simbolPlus(4))