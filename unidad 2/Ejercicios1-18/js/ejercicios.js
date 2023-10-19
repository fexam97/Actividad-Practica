/*
.1 Realizar una función, a la que se le pase como parámetro un número N,
y muestre por consola N veces, el siguiente mensaje: “Bienvenidos al
curso Full Stack”
2. Diseñar una función que tenga como parámetros dos números, y que
calcule el máximo.
3. Crear una función que se llame promedio3, que reciba como
parámetro tres valores y devuelva el promedio de los mismos.
4. Crear una función que lea notas hasta que ingrese -1 y devuelve el
promedio de las notas leídas. ( aunque no se suele leer valores en una
función)
5. Una función que se llame doble, que reciba como parámetro un valor, y
devuelva el doble del número ingresado como parámetro.
6. Una función que se llame cuadrado, que reciba como parámetro un
valor, y devuelva el valor del numero ingresado como parámetro
elevado al cuadrado.
7. Una función que se denomine imprimirValores que dado un número
por parámetro, imprima cual es el valor siguiente, el doble y el
cuadrado. Usando las funciones definidas en los puntos 5) , 6) y 7) :
siguiente, el doble y el cuadrado.
8. Una función que se denomine imprimirElDobleDelSiguiente que dado
un número por parámetro, imprima cual es el valor siguiente al el doble.
Usando las funciones definidas en los puntos 5) , 6) : siguiente, el
doble .
9. Una función que se denomine
imprimirElDobleDelSiguienteAlCuadrado que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el
cuadrado

*/

function saludarNveces(dato) {
    for (let i = 0; i < dato; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}

function calcularMaximo(numUno, numDos) {
    let mayor = (numUno < numDos) ? numUno : numDos
    return mayor
}

function promedioTres(numUno, numDos, numTres) {
    let suma = parseFloat(numUno) + parseFloat(numDos) + parseFloat(numTres)
    let promedio = suma / 3
    return promedio;
}


function ingresarNotas() {
    let notasToales = []
    let notas = 0
    let suma = 0;

    notas = parseFloat(prompt("Ingrese una nota"))

    while (notas !== -1) {
        notasToales.push(notas)
        notas = parseFloat(prompt("Ingrese una nota"))
    }

    for (let i = 0; i < notasToales.length; i++)
        suma += notasToales[i];

    console.log(`El promedio de las notas es : ${suma / notasToales.length}`);
}

function obtenerSiguiente(dato) {
    return dato + 1
}

function obtenerDoble(dato) {
    return dato * 2;
}

function obtenerCuadrado(dato) {
    return dato * dato
}

function imprimirValores(dato) {

    console.log(`Numero ingresado ${dato}`);

    console.log(`Numero siguiente : ${obtenerSiguiente(dato)}`);
    console.log(`Numero doble : ${obtenerDoble(dato)}`);
    console.log(`Numero al cuadrado : ${obtenerCuadrado(dato)}`);
}

function imprimirElDobleDelSiguiente(dato) {
    let doble = obtenerDoble(obtenerSiguiente(dato))
    console.log(`El doble del numero siguiente  ${dato} : ${doble}`);
}

function imprimirElDobleDelSiguienteAlCuadrado(dato) {
    let doble = obtenerDoble(obtenerSiguiente(dato))
    console.log(`El cuadrado del doble del siguiente de ${doble} : ${obtenerCuadrado(doble)}`);
}

/********************************************************************** */
var opcion = prompt("Ingrese una opcion : ")
let numUno
let numDos
let numTres

switch (opcion) {
    case '1':
        numUno = prompt("Ingrese un numero : ")
        saludarNveces(numUno)
        break;
    case '2':
        numUno = prompt("Ingrese el primer numero : ")
        numDos = prompt("Ingrese el segundo numero : ")
        console.log(`El numero mayor es : ${calcularMaximo(numUno, numDos)}`);
        break;
    case '3':
        numUno = prompt("Ingrese el primer numero :")
        numDos = prompt("Ingrese el segundo numero :")
        numTres = prompt("Ingrese el tercer numero : ")
        console.log(`El promedio es : ${promedioTres(numUno, numDos, numTres)}`);
        break;
    case '4':
        ingresarNotas()
        break;
    case '5':
        numUno = prompt("Ingrese un numero : ")
        console.log(`El doble de ${numUno} : ${obtenerDoble(numUno)}`);
        break;
    case '6':
        numUno = prompt("Ingrese un numero : ")
        console.log(`${numUno} elevado al cuadrado : ${obtenerCuadrado(numUno)}`);
        break;
    case '7':
        numUno = parseFloat(prompt("Ingrese un numero : "))
        imprimirValores(numUno)
        break;
    case '8':
        numUno = parseFloat(prompt("Ingrese un numero : "))
        imprimirElDobleDelSiguiente(numUno)
        break;
    case '9':
        numUno = parseFloat(prompt("Ingrese un numero : "))
        imprimirElDobleDelSiguienteAlCuadrado(numUno)    
    default:
        alert("todo OK")
        break;
}