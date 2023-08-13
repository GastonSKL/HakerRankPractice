/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

let arr = [1, 2, 3][(6, 7, 8)];
console.log(arr);

function diagonalDifference(arr) {
  //Inicializo lo longitud de mis columnas y filas, asumiendo que es un cuadrado y que todas tienen la misma longitud
  let length = arr[0].length;
  //Inicializo mis variables que van a tener la suma de las diagonales
  let suma1 = 0;
  let suma2 = 0;

  //Este for loop va a iterar 2 veces, una desde i hasta length - 1, para contabilizar la primera diagonal, y la segunda desde j, que parte de length - 1 hasta 0, que va a contabilizar desde la columna inversa.
  for (let i = 0, j = length - 1; i < length; i++, j--) {
    //Se le suma los valores de la primera diagonal
    suma1 += arr[i][i];
    //Se le suma los valores de la diagonal inversa
    suma2 += arr[i][j];
  }

  //Finalmente retorno el valor absoluto de su diferencia, también se podría multiplicar por uno
  return Math.abs(suma1 - suma2);
}
