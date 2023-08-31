// This algorithm segments the list into two parts: sorted and unsorted. It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted subarray and moves it to the beginning of the sorted subarray.

let array = [ 108, 23, 69, 420, 9 ];

for(let i = 0; i < array.length; i++)
{
    let minVal = i;
    for(let j = i + 1; j < array.length; j++)
    {
        if(array[j] > array[minVal]) minVal = j;
    }

    let temporary = array[minVal];
    array[minVal] = array[i];
    array[i] = temporary;

}

//This have two loops, for it to have a complexity of O(n°2);
console.log(array);