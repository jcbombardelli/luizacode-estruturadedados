
/**
 * 
 * Em matemática, determinante é uma função matricial que associa a cada matriz quadrada
 * um escalar, ou seja, é uma função que transforma uma matriz quadrada em um número real. 
 * 
 * Esta função permite saber se a matriz tem ou não inversa,  pois as que não têm são 
 * precisamente aquelas cujo determinante é igual a 0 
 * 
 * Exemplo para o calculo de area de um paralelogramo definido por todos seus vetores e 
 * pontos no espaço
 * 
 * Para saber mais: https://www.infoescola.com/matematica/matrizes-no-dia-a-dia/
 * Para saber mais: https://brasilescola.uol.com.br/matematica/determinantes-1.htm
 * Para saber mais: https://profes.com.br/Andriolo/blog/matriz-e-determinante-pra-que-raios-servem
 * 
 */
function determinante(matrix) {
    
    const ordem = matrix.length;

    if (ordem === 1) return matrix[0][0];

    if (ordem === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

    let det = 0;
    for (let j = 0; j < ordem; j++) {
        det += matrix[0][j] * cofator(matrix, 0, j);
    }

    return det;
}


function cofator(matrix, linha, coluna) {
    let sub_matriz = []
    let ordem = matrix.length
    let m = 0

    for (let i = 1; i < ordem; i++) {
        sub_matriz[m] = []

        for (let j = 0; j < ordem; j++) {
            if (j !== coluna) sub_matriz[m].push(matrix[i][j])
        }
        m++
    }

    //return Math.pow(-1, linha + coluna) * determinante(sub_matriz);
    return (coluna % 2 ? -1 : 1) * determinante(sub_matriz)
}


const matrixParalelogramo = [
    [2, 1, 2, 3, 4, 5, 6, 7, 2, 3],
    [0, 2, 0, 0, 0, 0, 0, 2, 3, 2],
    [0, 0, 4, 5, 5, 5, 2, 3, 2, 1],
    [0, 0, 0, 2, 0, 2, 3, 2, 5, 2],
    [0, 0, 0, 0, 4, 3, 2, 0, 5, 3],
    [0, 0, 0, 0, 0, 1, 0, 0, 5, 4],
    [0, 0, 0, 0, 0, 0, 4, 0, 5, 5],
    [0, 0, 0, 0, 0, 0, 0, 2, 5, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 7],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2]
]

const matrizSimples = [
    [2, 2],
    [2, 2]
]

//Pierre Frederic Sarrus
const matrizSarrus = [
    [4,5,7],
    [4,6,2],
    [1,2,3]
]

const result = determinante(matrizSarrus);


console.log(result)