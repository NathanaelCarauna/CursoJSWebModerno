// 24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function repeatXTimes(times){
    let x=0
    while(x <times){
        console.log(`${x+1}. Hello World!`)
        x++
    }
}

repeatXTimes(13)