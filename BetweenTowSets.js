/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let result = 0;

    for(let i = Math.max(...a); i <= Math.min(...b); i++)
    {
        let flag = true;

        for(let j = 0; j < a.length; j++)
        {
            if(i % a[j] !== 0)
            {
                flag = false;
                break;
            }
        }

        if(flag)
        {
            for (let k = 0; k < b.length; k++) {

                if(b[k] % i !== 0)
                {
                    flag = false;
                    break;
                }

            }
        }

        if(flag) result++;
    }

    return result
} 