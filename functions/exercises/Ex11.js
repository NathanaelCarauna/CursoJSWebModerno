// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function isLeapYear(year){
    let isLeapYear = false;
    if(year % 400 == 0){
        isLeapYear = true;
    }else if(year % 100 == 0){
        isLeapYear = false;
    }else if(year % 4 == 0){
        isLeapYear = true;
    }
    return isLeapYear;
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2021))
console.log(isLeapYear(2024))