// 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console

function fruitStore(fruit){
    switch(fruit){
        case 'maca':
            return 'We dont sell this fruit here';
        case 'kiwi':
            return 'We are short of kiwi'
        case 'Melancia':
            return "Here it is, it's R$ 3.00 the kg"
        default:
            return 'Sorry I dont understood'
    }
}

console.log(fruitStore('maca'))
console.log(fruitStore('kiwi'))
console.log(fruitStore('Melancia'))
console.log(fruitStore('456'))