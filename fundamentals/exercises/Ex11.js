// 11) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:
// Exemplos:
// receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
// receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]

function reveiveFirstAndLastElement(array) {
    return [array.shift(), array.pop()]
}

console.log(reveiveFirstAndLastElement([7, 14, 'olá']))
console.log(reveiveFirstAndLastElement([-100, 'aplicativo', 16]))
console.log(reveiveFirstAndLastElement([-100, 'aplicativo', 5, 6, 78, 123, 16]))