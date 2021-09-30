// 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function writeNumber(number) {
    switch (number) {
        case 1:
            console.log('one')
            break;
        case 2:
            console.log('two')
            break;
        case 3:
            console.log('three')
            break
        case 4:
            console.log('four')
            break
        case 5:
            console.log('five')
            break
        case 6:
            console.log('six')
            break
        case 7:
            console.log('seven')
            break
        case 8:
            console.log('eight')
            break
        case 9:
            console.log('nine')
            break
        case 10:
            console.log('ten')
            break
        default:
            console.log('Number out of range')
    }
}

writeNumber(4)
writeNumber(7)
writeNumber(2)
writeNumber(12)