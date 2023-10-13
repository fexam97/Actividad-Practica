/* Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
*/
function crearPiramide() {
    
    for(let i = 1 ; i <= 30 ; i++) {
    
        let fila = "";
    
        for(let j = 1 ; j <= i; j++) 
            fila += i;
    
        console.log(fila);
    }
}

function crearPiramideInversa() {
    
    for(let i = 30 ; i >= 1 ; i--) {
    
        let fila = "";
    
        for(let j = 1 ; j <= i; j++) 
            fila += i;
    
        console.log(fila);
    }
}

var opcion = prompt("1-Piramide normal\n 2-Piramide inversa")

switch (opcion) {
    case '1':
        crearPiramide();
        break;
    case '2':
        crearPiramideInversa();
        break;
    default:
        alert("todo ok");
        break;
}