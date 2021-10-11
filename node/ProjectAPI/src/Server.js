const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const dbSimulator = require('./DataBaseSimulator')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(dbSimulator.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dbSimulator.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dbSimulator.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
})
app.put('/produtos/:id', (req, res, next) => {
    const produto = dbSimulator.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dbSimulator.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})