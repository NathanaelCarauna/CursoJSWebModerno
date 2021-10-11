const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    if (funcionarios) {
        let result = funcionarios
            .filter(x => x.pais == 'China')
            .filter(x => x.genero === 'F')
            .reduce((acumulator, x) => acumulator.salario > x.salario ? x : acumulator)
        console.log(result)
    }
})