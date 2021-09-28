// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false

function verifyDivisibilityBy3(number){
    if(number % 3 == 0){
        return true;
    }
    return false;
}

console.log(verifyDivisibilityBy3(5))
console.log(verifyDivisibilityBy3(3))
console.log(verifyDivisibilityBy3(8))
console.log(verifyDivisibilityBy3(9))
console.log(verifyDivisibilityBy3(12))