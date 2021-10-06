// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const simpleInterest = (capital, interest, time) => {
    return capital + capital * (interest / 100) * time
}

const compoundInterest = (capital, interest, time) => {
    return capital * (1 + interest / 100) ** time
}

console.log(simpleInterest(1000, 1, 12))
console.log(compoundInterest(1000, 1, 12))