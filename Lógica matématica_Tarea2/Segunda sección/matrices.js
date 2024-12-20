//1. Escribir una función llamada “rotar(matriz)” en NodeJS que reciba como parámetro una
//matriz numérica cuadrada de nxn y la rote 90 grados en senGdo horario. La función debe
//devolver la matriz resultante.

let matrizA = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let matrizB = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

function rotar(matriz) {
    const n = matriz.length;
        const resultado = Array.from({ length: n }, () => Array(n).fill(0));
            for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
            resultado[j][n - 1 - i] = matriz[i][j];
        }
    } return resultado;
}

const matrizRotadaA = rotar(matrizA);
const matrizRotadaB = rotar(matrizB);

console.log("Matriz A:");
console.table(matrizA);
console.log("Matriz A rotada en sentido horario a 90 grado:");
console.table(matrizRotadaA);

console.log("Matriz B:");
console.table(matrizB);
console.log("Matriz B rotada en sentido horario a 90 grado:");
console.table(matrizRotadaB);