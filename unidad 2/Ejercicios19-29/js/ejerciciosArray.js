/*
19.Ejercicio 1: cree un array con todas las edades de los estudiantes de su
clase. Itere el array utilizando un bucle while y luego imprima todas las
edades en la consola.

20.Ejercicio 2: Al ejercicio 1 agregue un condicional dentro del ciclo while
para imprimir solo números pares. Cambie el ciclo para usar un ciclo
"for" en lugar de un ciclo "while".
Para los siguientes ejercicios, no puede ordenar su array. ¡Asegúrese
de que su solución funcione para cualquier array que se pase!

21.Ejercicio 3: escriba una función que reciba un array como parámetro e
imprima el número más bajo de la array en la consola.

22.Ejercicio 4: escriba una función que reciba un array como parámetro e
imprima el número más grande de la array en la consola.

23.Ejercicio 5: Escriba una función que reciba dos parámetros, una array y
un índice. La función imprimirá el valor del elemento en la posición
dada (basado en uno) en la consola. Por ejemplo, dada la siguiente
array e índice, la función imprimirá '6'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;
*/

function recorrerEdades(edades){
    let i = 0;

    while(i <= edades.length){
        console.log(edades[i]);
        i++;
    }
}

function recorrerEdadesPares(edades){
    for(let i = 0; i < edades.length ; i++){
        if(edades[i] % 2 == 0)
            console.log(edades[i]);
    }
}

function edadMinima(edades){
    let minimo = edades[0]

    for(let i = 0; i < edades.length ; i++){
        if(edades[i] > edades[i + 1])
            edadMinima = edades[i + 1]
    }
    console.log(`La edad minima es : ${edadMinima}`);
}

function edadMaxima(edades){
    let maximo = edades[0]

    for(let i = 0 ; i < edades.length ; i++){
        if(maximo < edades[i+1])
            maximo = edades[i+1]
    }
    console.log(`La edad maxima es : ${maximo}`);
}

function imprimirValorArray(edades, posicion) {
    console.log(`valor en la posicion ${posicion} : ${edades[posicion]}`);
}

var opcion = parseInt(prompt("Ingrese una opcion "))

var edades = [19, 20, 25, 24, 22, 20, 21, 36, 20, 21, 60, 30, 27, 29, 23, 18, 19]

switch (opcion) {
    case 1:
        recorrerEdades(edades)
        break;
    case 2:
        recorrerEdadesPares(edades)    
        break;
    case 3:
        edadMinima(edades)
        break;    
    case 4:
        edadMaxima(edades)
        break;
    case 5:
        var index;
        do{
            index = parseInt(prompt("Ingrese un numero"));
        }while(index >= edades.length)
        imprimirValorArray(edades, index)
        break;        
    default:
        alert("TODO OK")
        break;
}