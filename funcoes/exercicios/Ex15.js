// 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.


function buyHatch(model) {
    switch (model) {
        case 'hatch':
            console.log('Successful purchase')
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('Are you sure that you dont prefer this model?')
            break
        default:
            console.log('We dont work with this model here')

    }
}

buyHatch('hatch')
buyHatch('sedan')
buyHatch('motocicleta')
buyHatch('caminhonete')
buyHatch('beterraba')