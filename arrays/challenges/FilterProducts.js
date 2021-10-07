const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: 'Ipad pro', price: 4199, fragile: true},
    {name: 'Glass cup', price: 12.49, fragile: true},
    {name: 'Plastic cup', price: 18.99, fragile: false},
]

const filterByFragile = x => x.fragile
const filterByPrice = x => x.price >= 500
const filteredProducts = products.filter(filterByPrice).filter(filterByFragile)

console.log(filteredProducts)