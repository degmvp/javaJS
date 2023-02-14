//----------------------------------------------
// Curso de JavaqScript em 30/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

displaypri(15);

function displaypri(limite){
    for (let num = 2; num <= limite; num++){
        if(numprimo(num)) console.log(num);
    }
}

function numprimo(num) {
    for ( let divisor = 2; divisor < num; divisor++) {
        if(num % divisor === 0) {
            return false;
          
        }
    }
    return true;
}