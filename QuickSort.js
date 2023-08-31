// This is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted.

const swap = (items, left, rigth) =>
{
    let temp = items[left];
    items[left] = items[rigth];
    items[rigth] = temp;
}

const partition = (items, left, rigth) => 
{
    let mid = items[Math.floor((left + rigth) / 2)];
    let i = left;
    let j = rigth;

    while(i <= j)
    {
        while(items[i] < mid)
        {
            i++;
        }

        while(items[j] > mid)
        {
            j--;
        }

        if(i <= j)
        {
            swap(items, i, j);
            i++;
            j--;
        }
    }

    return i;
}

const quickSort = (items, left, rigth) =>
{
    let index;

    if(items.length > 1)
    {
        index = partition(items, left, rigth);

        if(left < index - 1)
        {
            quickSort(items, left, index - 1);
        }

        if(index < rigth)
        {
            quickSort(items, index, rigth);
        }
    }
    return items;
}

  var items = [152, 15, 3, 14, 87, 1, 21, 35, 11, 156, 13, 998, 155, 152];
  var sortedArray = quickSort(items, 0, items.length - 1);
  console.log(sortedArray); // prints [2, 3, 5, 6, 7, 9]

//   Because the array is being halved in each iteration, the time complexity isO(n*log(n))

