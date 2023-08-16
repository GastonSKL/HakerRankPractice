/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

let s = [2,2,1,3,2];
let d = 4;
let m = 2;

function birthday(s, d, m) {

    let ways = 0;
    //Itero sobre el array original, y para asegurarme que itere y siempre tenga un segmento m para contabilizar, hago
    //que recorra mientras i sea mayor o igual a la longitud, osea una posicion fuera del array, y menos que la longitud del segmento, 2 en este caso
    //asi que siempre recorreria el array pero teniendo segmentos para contar
    for (let i = 0; i <= s.length - m ; i++) {

        //Inicializo mi suma
        let sum = 0;

        //Hago que otro loop interno, itere sobre la longitud del segmento posible, m, y que agregue a mi sum, el valor que tenga en i, y lo que valga j, que siempre va
        // a valer en este caso 0 y 1, asi voy sumando el valor del segmento
        for (let j = 0; j < m; j++) {

            sum += s[i+j];

        }
        //Si mi segmento vale lo mismo que d, entonces significa que esto es una division posible, y la contabilizo
        if(sum == d) ways++;
    }

    return ways;
  }
  
  console.log(birthday(s, d, m));