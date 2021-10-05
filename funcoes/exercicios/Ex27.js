// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function evaluateHeight(height1, growRate1, height2, growRate2) {
    let answer = "";
    if (height1 == height2) {
        if (growRate1 > growRate2) {
            answer = `The first child will surpass the second child in 1 year`
        } else if (growRate1 < growRate2) {
            answer = `The second child will surpass the  first child in 1 year`
        }
        else {
            answer = `Both children have the same height and grow rate`
        }
    } else {
        if (height1 > height2) {
            if (growRate1 >= growRate2) {
                answer = `The lesser child will not surpass the taller child`
            } else {
                answer = `The lesser child will surpass the taller child in ${calculateTime(height2, growRate2, height1, growRate1)} years`
            }
        } else {
            if (growRate2 >= growRate1) {
                answer = `The lesser child won't surpass the taller child`
            }
            else {
                answer = `The lessar child will surpass the taller child in ${calculateTime(height1, growRate1, height2, growRate2)} years.`
            }
        }
    }
    return answer
}

function calculateTime(lesserHeight, lesserGrowRate, greaterHeight, greaterGrowRate) {
    let qtdYears = 0
    while (lesserHeight < greaterHeight) {
        greaterHeight += greaterGrowRate
        lesserHeight += lesserGrowRate
        qtdYears++        
    }
    return qtdYears
}

console.log(evaluateHeight(150, 2, 140, 4))
console.log(evaluateHeight(150, 2, 150, 4))
console.log(evaluateHeight(150, 5, 150, 2))
console.log(evaluateHeight(150, 5, 160, 2))