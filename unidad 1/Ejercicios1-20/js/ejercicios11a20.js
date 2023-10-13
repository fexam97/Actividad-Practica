/*
11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales
12. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales
13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)
14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay
que decir todos por los que es divisible)
15. Escribir un programa que escriba en pantalla los divisores de un número dado
16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados
17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)
18. Pide la edad y si es mayor de 18 años indica que ya puede conducir
19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente
20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
*/

function contarVocales(frase) {
    let arrayVocales = ['a', 'e', 'i', 'o', 'u'];
    let contadorVocales = 0;

    for (let i = 0; i < arrayVocales.length; i++) {

        for (let j = 0; j < frase.length; j++) {

            if (frase[j] === arrayVocales[i])
                contadorVocales++;
        }
    }
    console.log(`Cantidad de vocales en la frase '${frase}' : ${contadorVocales} .`);
}


function contarOcurreciasVocales(frase) {
    let arrayVocales = ['a', 'e', 'i', 'o', 'u'];
    let contadorLetraA = 0;
    let contadorLetraE = 0;
    let contadorLetraI = 0;
    let contadorLetraO = 0;
    let contadorLetraU = 0;

    for (let i = 0; i < arrayVocales.length; i++) {

        for (let j = 0; j < frase.length; j++) {

            if (frase[j] === arrayVocales[i]) {

                switch (frase[j]) {
                    case 'a':
                        contadorLetraA++;
                        break;
                    case 'e':
                        contadorLetraE++;
                        break;
                    case 'i':
                        contadorLetraI++;
                        break
                    case 'o':
                        contadorLetraO++;
                        break;
                    case 'u':
                        contadorLetraU++;
                        break;
                    default:
                        break;
                }
            }
        }

    }

    console.log(`Frase : ${frase}`);

    console.log(`Cantidad de letras 'a' : ${contadorLetraA} 
             \n  Cantidad de letras 'e' : ${contadorLetraE}
             \n  Cantidad de letras 'i' : ${contadorLetraI}
             \n  Cantidad de letras 'o' : ${contadorLetraO}
             \n  Cantidad de letras 'u' : ${contadorLetraU}`);


}

function esDivisible(numero) {

    let condicion = false;

    if (numero % 2 === 0) {
        console.log(`El numero ${numero} es divisible por 2`);
        condicion = true;
    }

    if (numero % 3 === 0) {
        console.log(`El numero ${numero} es divisible por 3`);
        condicion = true;
    }

    if (numero % 5 === 0) {
        console.log(`El numero ${numero} es divisible por 5`);
        condicion = true;
    }

    if (numero % 7 === 0) {
        console.log(`El numero ${numero} es divisible por 3`);
        condicion = true;
    }

    if (!condicion)
        console.log(`El numero ${numero} no es divisible por ninguno de los numeros (2, 3, 5 y 7).`);

}

function mostrarDivisores(numero) {

    console.log(`Divisores de ${numero} : `);

    for (let i = 0; i <= numero; i++) {
        if (numero % i === 0)
            console.log(i);
    }

}

function mostrarDivisoresEnComun(numUno, numDos) {

    let menor = Math.min(numUno, numDos);

    console.log(`divisores en comun entre ${numUno} y ${numDos} : `);

    for (let i = 1; i <= menor; i++) {

        if (numUno % i === 0 && numDos % i === 0)
            console.log(i);
    }

}

function EsPrimo(numero) {

    let resultado = false;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(i);
            resultado = true;
        }
    }

    if (!resultado) {
        console.log(`El numero ${numero} ES PRIMO`);
    }
    else
        console.log(`El numero ${numero} NO ES PRIMO`);


}

function puedeConducir(numero) {

    if (numero >= 18) {
        console.log("Puede conducir.");
    }
    else
        console.log("Todavia no tiene edad para conducir.");

}

function informarNota(numero) {

    if (numero < 3) {
        console.log("MUY DEFICIENTE");
    }
    else if (numero >= 3 && numero < 5) {
        console.log("INSUFICIENTE");
    }
    else if (numero >= 5 && numero < 6) {
        console.log("SUFICIENTE");
    }
    else if (numero >= 6 && numero < 7) {
        console.log("BIEN");
    }
    else if (numero >= 7 && numero < 9) {
        console.log("NOTABLE");
    }
    else
        console.log("SOBRESALIENTE");

}

function ingresarCadenas() {
    
    let cadenasTotales = [];
    let cadena;

    cadena = prompt("Ingrese una cadena : ")

    while (cadena != "") {
        
        cadena = prompt("Ingrese una cadena : ")

        cadenasTotales.push(cadena);
    }

    console.log("Cadenas ingresadas : ");
    console.log(cadenasTotales);

}


/********************************************************************** */

var opcion = prompt("Ingrese una opción : ");

switch (opcion) {
    case '1':
        let fraseUno = prompt("Ingrese una frase : ");
        contarVocales(fraseUno);
        break;
    case '2':
        let fraseDos = prompt("Ingrese una frase : ");
        contarOcurreciasVocales(fraseDos);
        break;
    case '3':
        let numUno = prompt("Ingrese un numero : ");
        esDivisible(numUno);
        break;
    case '4':
        let numDos = prompt("Ingrese un numero : ");
        mostrarDivisores(numDos);
        break;
    case '5':
        let numTres = prompt("Ingrese el primer numero : ");
        let numCuatro = prompt("Ingrese el segundo numero : ");
        mostrarDivisoresEnComun(numTres, numCuatro);
        break;
    case '6':
        let numCinco = prompt("Ingrese un numero : ");
        EsPrimo(numCinco);
        break;
    case '7':
        let numSeis = prompt("Ingrese la edad : ");
        puedeConducir(numSeis);
        break;
    case '8':
        let numSiete;

        do {
            numSiete = prompt("Ingrese la nota");
        } while (numSiete < 0 || numSiete > 10)

        informarNota(numSiete);
        break;
    case '9':
        ingresarCadenas();
        break;
    default:
        console.log("Salir");
        break;
}