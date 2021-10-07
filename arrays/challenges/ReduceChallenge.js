const students = [
    { name: 'João', grade: 7.3, scholarshipHolder: false },
    { name: 'Maria', grade: 9.2, scholarshipHolder: true },
    { name: 'Pedro', grade: 9.8, scholarshipHolder: false },
    { name: 'Ana', grade: 8.7, scholarshipHolder: true },
]

const justScholarshipHolder = students.map(x => x.scholarshipHolder)
//Challenge 1: Are all students scholarship holders?
const result = justScholarshipHolder.reduce((result, corrent) => result && corrent)
console.log("Are all students scholarship holders? " + result)

//Challenge 2: Is some student a scholarship holder?
const result2 = justScholarshipHolder.reduce((result, corrent) => result || corrent)
console.log("Is some student a scholarship holder? " + result2)