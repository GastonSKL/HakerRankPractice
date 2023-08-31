let array = [108, 23, 69, 420, 9, 78, 120, 489, 12, 1];
let temporary = 0;

for(let i = 0; i <= array.length - 2; i++)
{
    for(let j = 0; j <= array.length - 2; j++)
    {
        if(array[j] < array[j + 1])
        {
            temporary = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temporary;
        }
    }
}

//This sort compares adjacent elements and check if one is bigger than the other, swapping them in place.
//This have two loops, for it to have a complexity of O(n°2);

console.log(array);