// This is the simplest searching algorithm where we go through every element in the list until we find the one we are looking for. It has a time complexity of O(n).

const LinearSearch =(arr, key)=>
{
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == key)
        {
            return i;
        }
    }
    return -1;
}
