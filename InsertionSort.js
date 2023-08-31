// This algorithm builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

let array = [ 23, 9, 85, 12, 99, 34, 60, 15, 100, 1, 0,15 , 13 ];

let value = 0;
let flag = 0;

for(let i = 1; i < array.length; i++)
{
    value = array[i];
    flag = 0;

    for(let j = i - 1; j >= 0 && flag != 1;)
    {
        if(array[j] > value)
        {
            array[j + 1] = array[j];
            j--;
            array[j + 1] = value;
        }
        else flag = 1;
    }
}
console.log(array);

//This have two loops, for it to have a complexity of O(n°2);