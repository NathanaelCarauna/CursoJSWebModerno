Array.prototype.reduce2 = function(callback, initialValue){
    let acumulator = initialValue || this[0];
    for(let i = 0; i < this.length; i++){
        acumulator = callback(acumulator, this[i], i, this)
    }
    return acumulator;
}

const students = [
    { name: 'João', grade: 7.3, scholarshipHolder: false },
    { name: 'Maria', grade: 9.2, scholarshipHolder: true },
    { name: 'Pedro', grade: 9.8, scholarshipHolder: false },
    { name: 'Ana', grade: 8.7, scholarshipHolder: true },
]

const initialValue = 3
console.log(students.map(x=>x.grade).reduce((acumulator, corrent) => acumulator + corrent, initialValue))

const justScholarshipHolder = students.map(x => x.scholarshipHolder)
//Challenge 1: Are all students scholarship holders?
const result = justScholarshipHolder.reduce2((result, corrent) => result && corrent)
console.log("Are all students scholarship holders? " + result)

//Challenge 2: Is some student a scholarship holder?
const result2 = justScholarshipHolder.reduce2((result, corrent) => result || corrent)
console.log("Is some student a scholarship holder? " + result2)