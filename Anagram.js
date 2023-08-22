/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let s = "abccde";


function anagram(s) {

    //Aqui compruebo si realmente puedo dividir el string en dos partes iguales para ser comparadas, en caso de que no, retorno -1
    if(s.length % 2 != 0) return -1

    //Aqui divido mi string en dos partes de la misma longitud
    let s1 = s.slice(0, s.length/2);
    let s2 = s.slice(s.length/2, s.length);
    

    //Aqui itero sobre cada elemento de mi string, luego de trasnformarlo en un array
    //Luego compruebo que el elemento sobre el que estoy iterando de mi segundo string, este dentro del string uno.
    //Si esta, remplazo ese elemento por un 0 para que no se vuelva a repetir.
    s2.split("").forEach(el =>{
        let test = s1.includes(el);
    
        if(test){
            s1 = s1.replace(el, 0);
        }
    })
    
    //Luego de esta iteracion, filtro el primer string en todos los elementos que justamente no sean 0, la longitud del array resultante, es igual al numero de cambios que tengo que hacer para que sea realmente un anagrama
    s1 = s1.split("").filter(el => el != 0);
    
    
    return s1.length;

}

console.log(anagram(s));