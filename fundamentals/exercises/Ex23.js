// 23) Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// 📕 Considere que todas as palavras só são separadas por um espaço.
// Exemplos:
// contarPalavras("Sou uma frase") // retornará 3
// contarPalavras("Me divirto aprendendo a programar") // retornará 5

function countWors(sentence){
    return sentence.split(' ').length;
}

console.log(countWors("Sou uma frase"))
console.log(countWors("Me divirto aprendendo a programar"))