var sumatoria = 0
var numeros = prompt("Ingrese un numero :");

while (numeros) {
    sumatoria += parseInt(numeros);
    numeros = prompt("Ingrese un numero :");
}
alert(`La suma de los numeros es : ${sumatoria}`)