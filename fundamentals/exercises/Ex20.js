// 20) Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.
// 📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
// Exemplos:
// areaDoTriangulo(10, 15) // retornará 75.00
// areaDoTriangulo(7, 9) // retornará 31.50
// areaDoTriangulo(9.25, 13.1) // retornará 60.59

function triangleArea(base, height) {
    return ((base * height) / 2).toFixed(2)
}

console.log(triangleArea(10, 15))
console.log(triangleArea(7, 9))
console.log(triangleArea(9.25, 13.1))