

//Exemplo 01

function fatorial(x) {
    if(x <= 1) return 1
    else return x * fatorial(x-1)
}

const resultFatorial = fatorial(100)
console.log(resultFatorial)



//Exemplo 2
//Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
//F(n) = F(n-1) + F(n-2)
//Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
//F(1) = 0
//F(2) = 1
function fibonacci(x) {
    if(x <= 2) return 1
    else return (fibonacci(x-1) + (fibonacci(x-2)))
}

const resultFibonacci = fibonacci(6)
console.log(resultFibonacci)