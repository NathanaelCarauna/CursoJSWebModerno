// 13) Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
// Exemplos:
// filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
// filtrarNumeros(["a", "c"]) // retornará []

function filterNumbers(numbers) {
    return numbers.filter(x => typeof x === "number")
}

console.log(filterNumbers(["Javascript", 1, "3", "Web", 20]))
console.log(filterNumbers(["a", "c"]))