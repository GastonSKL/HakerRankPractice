/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

//You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
//*** The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump. */
//*** The first kangaroo starts at location x2 and moves at a rate of v2 meters per jump. */
//You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

let x1 = 2;
let v1 = 1;
let x2 = 1;
let v2 = 2;

function kangaroo(x1, v1, x2, v2) {

    if(x1 == x2 && v1 == v2) return "YES";

    if((v1 > v2) && ( (x2 - x1) % (v1 - v2) === 0)) return "YES"

    if(v1 < v2) return "NO"

    return "NO"
}