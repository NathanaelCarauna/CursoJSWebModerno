// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A

function giveConcept(grades) {
    let concepts = [];
    grades.forEach(x => {
        console.log(x)
        if (x >= 0 && x <= 4.9)
            concepts.push('D');
        else if (x <= 6.9)
            concepts.push('C')
        else if (x <= 8.9)
            concepts.push('B')
        else if (x <= 10.0)
            concepts.push('A')
        else
            concepts.push('Invalid grade')
    })
    return concepts;
}

let grades = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
console.log(giveConcept(grades))