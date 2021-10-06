const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lapís", "preco": 41.22}',
    '{"nome":  "Caneta", "preco": 7.50}',
]

//Return an array just with prices
const justPrices  = carrinho.map(x => JSON.parse(x).preco)
console.log(justPrices)