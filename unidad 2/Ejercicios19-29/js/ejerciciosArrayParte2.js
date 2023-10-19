/*
24.Ejercicio 6: Escriba una función que reciba una array y solo imprima los
valores que se repiten. Por ejemplo, dada la siguiente array e índice, la
función imprimirá '6,23,33,100'.
var array =
[3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

25.Ejercicio 7: escriba una función de JavaScript simple para unir todos los
elementos de la siguiente array en una cadena.
myColor = ["Red", "Green", "White", "Black"];
Debería ver lo siguiente en su consola: "Rojo", "Verde", "Blanco",
"Negro"

26.Ejercicio 8: escriba una función de JavaScript que invierta un número.
Por ejemplo, si x = 32443, la salida debería ser 34423.

27.Ejercicio 9: escriba una función de JavaScript que devuelva una cadena
en orden alfabético. Por ejemplo, si x = 'webmaster', la salida debería
ser 'abeemrstw'. La puntuación y los números no se pasan en la
cadena.

28.Ejercicio 10: escriba una función de JavaScript que convierta la primera
letra de cada palabra a mayúsculas. Por ejemplo, si x = "prince of
persia", la salida debería ser "Prince Of Persia".

29.Ejercicio 11: escriba una función de JavaScript que busque la palabra
más larga de una frase. Por ejemplo, si x = "Tutorial de desarrollo web",
el resultado debería ser "Desarrollo"
*/
function imprimirValoresRepetidos(array) {

    var arrayDos = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {

            if (array[i] == array[j])
                arrayDos.push(array[i])
        }
    }
    console.log(arrayDos);
}

function imprimirColores(array) {

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function invertirValores(dato) {
    return dato.split('').reverse().join('');
}

function ordernarAlfabetico(array) {
    return array.split('').sort().join('');
}

function insertarMayusculas(array){
    let arreglo = array.split(''); 
    let nuevoArreglo;

    for(let i = 0; i < array.length ; i++){
        arreglo[i] = arreglo[i].charAt(0).toUpperCase() + arreglo[i].slice(1);
    }
    nuevoArreglo = arreglo.join('');

    return nuevoArreglo;
}

function palabraLarga(array) {
    
    if (array.length === 0) {
      return null; // Devuelve null si el arreglo está vacío
    }
  
    let palabraMasLarga = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i].length > palabraMasLarga.length) {
        palabraMasLarga = array[i];
      }
    }
  
    return palabraMasLarga;
  }

/******************************************** */

var opcion = parseInt(prompt("Ingrese una opcion"))
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var myColor = ["Red", "Green", "White", "Black"];
var valor;
switch (opcion) {
    case 1:
        imprimirValoresRepetidos(array)
        break;
    case 2:
        imprimirColores(myColor)
        break;
    case 3:
        valor = prompt("Ingrese un valor : ")
        console.log(`Numero invertido ${valor} : ${invertirValores(valor)}`);
        break;
    case 4:
        valor = prompt("Ingrese una cadena : ")
        console.log(`Cadena ingresada : ${valor}`);
        console.log(`Ordenada en orden alfabetico : ${ordernarAlfabetico(valor)}`);
        break;
    case 5:
        valor = prompt("Ingrese una cadena : ")
        console.log(`Cadena ingresada : ${valor}`)
        console.log(`Cadena con letras mayusculas : ${insertarMayusculas(valor)}`);
        break;
    case 6:
        valor = prompt("Ingrese una cadena : ")
        console.log(`Cadena ingresada : ${valor}`);
        console.log(`Palabra con mayor longitud : ${palabraLarga(valor)}`);
        break;
    default:
        alert("Todo Ok")
        break;
}