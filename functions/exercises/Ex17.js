// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function increaseSalary(plan, salary) {
    let newSalary = 0;
    switch (plan) {
        case 'A':
            newSalary = salary * 1.1
            break;
        case 'B':
            newSalary = salary * 1.15
            break;
        case 'C':
            newSalary = salary * 1.2
            break;
        default:
            newSalary = salary
    }    
    return Number(newSalary).toFixed(2)
}

console.log(increaseSalary('A', 100))
console.log(increaseSalary('B', 100))
console.log(increaseSalary('C', 100))
console.log(increaseSalary('d', 100))