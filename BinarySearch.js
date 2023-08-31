// This algorithm works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. However, for binary search to work, the list must be sorted. It has a time complexity of O(log n).

const busquedaBinaria = (array, objetivo) => 
{
    let comienzo = 0;
    let final = arr.length - 1;

    while(comienzo <= final)
    {
        let medio = Math.floor((comienzo + final) / 2);

        if(array[medio] === objetivo)
        {
            return medio;
        }

        if(array[medio] < objetivo)
        {
            comienzo = medio + 1;
        }

        if(array[medio] > objetivo)
        {
            final = medio - 1;
        }
    }

    return -1;
}
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,74,14,12,36,57,84];
  console.log(busquedaBinaria(arr, 14)); // Output: 4 (Element 5 is found at index 4)
  console.log(busquedaBinaria(arr, 2)); // Output: -1 (Element 11 does not exist in the array)

