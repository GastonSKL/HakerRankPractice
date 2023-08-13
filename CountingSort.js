/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    //se crea un array nuevo y se lo llena de 0.
    let newArray = new Array(100).fill(0);
    //Para cada index del array nuevo que coincida con el numero 
    //del array que se esta iteranando, el parametro de la funcion
    //se lo aumenta en uno, contabilizando justamente el numero de apariciones 
    //de dicho numero en el array parametro
    for (num of arr){
        newArray[num]++;
    }

    return newArray;

}

