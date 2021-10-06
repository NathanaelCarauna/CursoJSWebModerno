// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

function classifyTriangle(a, b, c) {
    if (a == b == c) {
        return "equilatero"
    }
    if (a == b && a != c || b == c && c != a) {
        return "isoceles"
    }
    if (a != b != c) {
        return "escaleno"
    }
}

console.log(classifyTriangle(1, 2,3 ))
console.log(classifyTriangle(1, 1, 1))
console.log(classifyTriangle(1, 2, 2))
console.log(classifyTriangle(1, 1, 2))