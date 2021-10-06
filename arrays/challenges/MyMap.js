Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        newArray.push(callback(element, i, this))        
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapís", "preco": 41.22}',
    '{"nome":  "Caneta", "preco": 7.50}',
]

//Return an array just with prices
const justPrices  = carrinho.map2(x => JSON.parse(x).preco)
console.log(justPrices)