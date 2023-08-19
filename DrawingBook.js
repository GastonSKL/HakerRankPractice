// A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 2  is always on the right side:
// When they flip page 1, they see pages  2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is  n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn? They can start at the beginning or the end of the book.
// Given n  and p, find and print the minimum number of pages that must be turned in order to arrive at page p.
/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */
//n = length
//p = page number
function pageCount(n, p) {

    let array = new Array(n+1).fill(0);
    let midIndex = Math.floor((array.length + 1) / 2);
    let pageTurn = 0;

    for (let i = 0; i <= n; i++) {

        array[i] = i;
        
    }

    if(p >= midIndex)
        {
            for (let j = array.length -1 ; j >= midIndex; j = j - 2) {
                pageTurn++;
                if(array[j] == p || array [j - 1] == p) break;
            }
        }
    if(p < midIndex)
    {
        for (let k = 0; k < midIndex; k = k + 2) {

            if(array[k] == p || array[k + 1] == p) break;
            pageTurn++;

        }
    }

    return pageTurn;
}

console.log(pageCount(6,5));