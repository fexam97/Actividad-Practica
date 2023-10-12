/*
1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”.
2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).
3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.
4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”
5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.
6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.
7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.
8. Escribe un programa que pida un número y diga si es divisible por 2
9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a
10. Escribe un programa que pida una frase y escriba las vocales que aparecen
*/

// un switch cada 10 ejercicios

function mostrarSuma(numUno, numDos) {
    numUno = parseFloat(numUno);
    numDos = parseFloat(numDos);
    console.log(`La suma es : ${(numUno + numDos)}`);
}

function mostrarMayor(numUno, numDos) {

    if (numUno > numDos)
        console.log(`${numUno} es el mayor.`);
    else if (numUno < numDos) {
        console.log(`${numDos} es el mayor.`);
    }
    else
        console.log("Son iguales.");
}

function mayorDeLosTres(numUno, numDos, numTres) {

    if (numUno > numDos && numUno > numTres) {
        console.log(`${numUno} es el mayor.`);
    }
    else if (numDos > numUno && numDos > numTres) {
        console.log(`${numDos} es el mayor`);
    }
    else if (numTres > numUno && numTres > numDos) {
        console.log(`${numTres} es el mayor`);
    }
    else
        console.log("Los tres numeros son iguales");
}

function divisiblePorDos(numUno) {
    if (numUno % 2 === 0)
        console.log(`El numero ${numUno} es divisible por 2.`);
    else
        console.log(`El numero ${numUno} NO es divisible por 2.`);
}


function contarLetras(frase) {
    let contador = 0;

    for (let i = 0; i < frase.length; i++) {

        if (frase.charAt(i) == 'a')
            contador++;
    }

    console.log(`Cantidad de veces que aparece la letra 'a' en la frase '${frase}' : ${contador}`);
}

function mostrarVocales(frase) {
    
    let arrayVocales = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0 ; i < arrayVocales.length ; i++){
        console.log(`Con letra ${arrayVocales[i]}  : `);

        for(let j = 0; j < frase.length ; j++) {
            if(frase[j] === arrayVocales[i])
                console.log(frase[j]);
        }   
    }
}

document.write("Unidad 1 ")

var opcion = prompt("Ingrese una Opcion : ");

switch (opcion) {
    case '1':
        alert("Hola mundo");
        break;
    case '2':
        document.write("Hola mundo");
        break;
    case '3':
        console.log(`5 + 3 = ${(5 + 3)}`);
        break
    case '4':
        let name = prompt("Ingrese un nombre : ");
        document.write("\n Bienvenido " + name);
        break;
    case '5':
        let numUno = prompt("Ingrese el primer numero :");
        let numDos = prompt("Ingrese el segundo numero :");
        mostrarSuma(numUno, numDos);
        break;
    case '6':
        let numTres = prompt("Ingrese el primer numero :");
        let numcuatro = prompt("Ingrese el segundo numero :");
        mostrarMayor(numTres, numcuatro);
        break;
    case '7':
        let numCinco = prompt("Ingrese el primer numero :");
        let numSeis = prompt("Ingrese el segundo numero :");
        let numSiete = prompt("Ingrse el tercer numero :");
        mayorDeLosTres(numCinco, numSeis, numSiete);
        break;
    case '8':
        let numOcho = prompt("Ingrese un numero :");
        divisiblePorDos(numOcho);
        break;
    case '9':
        let frase = prompt("Ingrese una frase :");
        contarLetras(frase);
        break;
    case '10':
        let fraseDos = prompt("ingrese una frase :");
        mostrarVocales(fraseDos);
        break;
    default:
        console.log("Salir");
        break;
}
