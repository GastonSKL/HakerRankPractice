/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

let arr = [1,1,2,2,3];

function migratoryBirds(arr) {

    let maximo = 0;
    let maxima_id = 0;
    //aqui creo un array nuevo con la longitud del original, y luego lo lleno de 0. Tener en cuenta que esto me va a servir para contabilizar la frecuencia de aparicion del dato en i
    //del array original.
    let store = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {

        store[arr[i]]++;

        if(store[arr[i]] > maximo)
        {
            maximo = store[arr[i]];
            maxima_id = arr[i];
        }
        else if(store[arr[i]] === maximo && arr[i] < maxima_id)
        {
            maxima_id = arr[i];
        }

    }

    return maxima_id;
}

migratoryBirds(arr);