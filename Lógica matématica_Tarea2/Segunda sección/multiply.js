matrizA = [
    [1,2,3],
    [4,5,6]
];
matrizB = [
    [7,8],
    [9,10],
    [11,12]
];

const multiplyMatrix = (matrizA,matrizB) => { 
const rowsA = matrizA.length;
const colsA = matrizA[0].length;
const rowsB = matrizB.length;
const colsB = matrizB[0].length;
    if(colsA !== rowsB)
      throw new Error("La cantidad de columnas de la primera matriz debe ser la misma que la cantidad de filas de la segunda matriz");

    console.log(multiplyMatrix(matrizA,matrizB));

    for(let i=0; i < n; i++){
    const subResultado = []
        for(let j=0; i < n; j++){
        let sumTmp = 0;
            for(let k=0; i < n; k++){ 
            sumTmp += A[i][k]*B[k][j]
            resultado.push(subResultado);
         }
        subResultado.push(sumTmp)
        }
    } return resultado;
}