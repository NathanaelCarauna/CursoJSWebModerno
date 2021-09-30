// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const orderFood = (code, quantity) => {
    let price = 0
    switch (code) {
        case 100:
            price = 3
            break
        case 200:
            price = 4
            break
        case 300:
            price = 5.5
            break;
        case 400:
            price = 7.5
            break
        case 500:
            price = 3.5
            break
        case 600:
            price = 2.8
            break
        default:
            return console.log("Product doesn't exist")
    }
    console.log(`Total: $ ${(price * quantity).toFixed(2)} `)
}

orderFood(200, 4)
orderFood(300, 5)
orderFood(3, 5)

