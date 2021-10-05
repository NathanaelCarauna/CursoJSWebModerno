// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function evaluate(cod, grade1, grade2, grade3) {
    let grades = [grade1, grade2, grade3]
    grades.sort((a, b) => a < b ? 1 : -1)
    let finalAvarage = (grades[0] * 4 + grades[1] * 3 + grades[2] * 3) / 10
    console.log(`Student code: ${cod}. Grades: ${grade1}, ${grade2}, ${grade3}. ${finalAvarage <5? "Reprovado." : "Aprovado."}`)
}

evaluate(123, 2.8, 6, 3.5)
