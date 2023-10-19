/*
10.Una función que dado la longitud de un lado de un cuadrado devuelva
el perímetro
11. Una función que dado la longitud de un lado de un cuadrado devuelva
la superficie.
12.Una función que dado el radio de un círculo devuelva la circunferencia
(perímetro del círculo).
13.Una función que dado el radio de un círculo devuelva el área del
círculo.
14.Una función que dado un número de mes y me devuelva la cantidad de
días de ese mes (suponiendo que no es un año bisiesto).
15.Una función que reciba como parámetro un año y diga si ese año es
bisiesto.
16.Una función que reciba el día, mes y año y me devuelva la cantidad de
días de ese mes.
17.Una función que reciba día, mes y año y devuelva el día anterior
18.Una función que se llame ultimoDiaDelMes que reciba día, mes y año y
devuelva el último día del mes.
*/

function obtenerPerimetro(longitud) {
    return longitud * 4
}

function obtenerSuperficie(longitud) {
    return longitud * longitud
}

function obtenerPerimetroCirculo(radio) {
    return 2 * radio  // el π lo dejo expresado como constante
}

function obtenerAreaCirculo(radio) {
    return radio * radio
}

function obtenerCantidadDiasDeUnMes(mes) {
    let meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31, 30, 31]
    return meses[mes]
}

function esBisiesto(año) {

    let todoOk = true;

    if (año % 4 === 0 && (año % 100 !== 0 || año % 400 == 0))
        return todoOk;
    else {
        todoOk = false
        return todoOk;
    }
}

function obtenerDiasDeUnMesConFecha(dia, mes, año) {

    if (obtenerCantidadDiasDeUnMes(mes) < dia) {
        console.log("Error vuelva a ingresar el dia y el mes");
    }
    else if (mes === 2 && esBisiesto(año))
        return obtenerCantidadDiasDeUnMes(mes)++;
    else
        return obtenerCantidadDiasDeUnMes(mes);
}

function obtenerCantidadDiasDeUnMesBisiesto(mes, año) {
    let meses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 31, 30, 31]

    if (meses[mes] === 1 && esBisiesto(año))
        return obtenerCantidadDiasDeUnMes(mes)++
    else
        return obtenerCantidadDiasDeUnMes(mes)
}

function diaAnterior(dia, mes, año) {

    let diaN = dia;
    let mesN = mes;
    let añoN = año;

    dia--;

    if (dia === 0) {
        mes--;
        if (mes === 0) {
            mes = 12;
            año--;
        }
        dia = obtenerDiasDeUnMesConFecha(dia, mes, año)
    }

    if (esBisiesto(año)) {
        console.log("El año es bisiesto ");
    }
    else
        console.log("El año no es bisiesto ");

    console.log(`Dia ingresado : ${diaN}/${mesN + 1}/${añoN}`);
    console.log(`Dia anterior : ${dia}/${mes + 1}/${año}`);

}

function validarfecha() {

    let año
    let mes
    let dia

    do {
        año = parseInt(prompt("Ingrese el año :"))
    } while (año < 1600 || año > 10000)

    do {
        mes = parseInt(prompt("Ingrese el mes : "))
    } while (mes < 1 || mes > 12)

    do {
        dia = parseInt(prompt("Ingrese el dia : "))
    } while (dia >= 31)

    console.log("TODO OK");

    diaAnterior(dia, mes - 1, año)
}




/************************************************************** */

var opcion = parseInt(prompt("Ingrese una opcion : "))
let numUno;
let dia;
let mes;
let año;

let nombreMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

switch (opcion) {
    case 1:
        numUno = parseFloat(prompt("Ingrese la longitud de un lado de un cuadrado :"))
        console.log(`El perimetro es : ${obtenerPerimetro(numUno)}`)
        break;
    case 2:
        numUno = parseFloat(prompt("Ingrese la longitud de un lado de un cuadrado :"))
        console.log(`La superficie es : ${obtenerSuperficie(numUno)}`)
        break;
    case 3:
        numUno = parseFloat(prompt("Ingrese el radio de una circunferencia : "))
        console.log(`El perimetro es : ${obtenerPerimetroCirculo(numUno)} π`);
        break;
    case 4:
        numUno = parseFloat(prompt("Ingrese el radio de una circunferencia : "))
        console.log(`El area es : ${obtenerAreaCirculo(numUno)} π`)
        break;
    case 5:
        do {
            mes = parseInt(prompt("Ingrese un mes : "))
        } while (mes < 1 || mes > 12);

        console.log(`El mes de ${nombreMeses[mes - 1]} tiene ${obtenerCantidadDiasDeUnMes(mes - 1)} dias.`);
        break;
    case 6:
        do {
            año = parseInt(prompt("Ingrese un año : "))
        } while (año < 1600 || mes > 10000);

        if (esBisiesto(año))
            console.log(`El año ${año} es bisiesto.`);
        else
            console.log(`El año ${año} NO es bisiesto.`);

        break;

    case 7:
        // no entendi por que hay que ingresar el dia

        do {
            dia = parseInt(prompt("Ingrese el dia : "))
        } while (dia >= 31)

        do {
            mes = parseInt(prompt("Ingrese el mes : "))
        } while (mes < 1 || mes > 12)

        do {
            año = parseInt(prompt("Ingrese el año : "))
        } while (año < 1600 || año > 10000)

        console.log(`Cantidad de dias del mes de ${nombreMeses[mes - 1]} : ${obtenerDiasDeUnMesConFecha(dia, mes - 1, año)}`)
        break;
    case 8:
        validarfecha()
        break;

    default:
        alert("NADA OK")
        break;
}