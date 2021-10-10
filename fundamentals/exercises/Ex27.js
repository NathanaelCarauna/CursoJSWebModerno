// 27) Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir:
// Exemplo:
// inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

function invertValuesAndKeys(obj) {
    let entries = Object.entries(obj)    
    let newObj = {}
    for (let i = 0; i < entries.length; i++) {
        newObj[entries[i][1]] = entries[i][0]
    }
    return newObj
}

console.log(invertValuesAndKeys({ a: 1, b: 2, c: 3 }))
console.log(invertValuesAndKeys({ abobora: 'verdura', morango: 'fruta', gergilim: 'semente' }))