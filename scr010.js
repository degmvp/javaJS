//----------------------------------------------
// Curso de JavaqScript em 30/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
function criarCel(marca,tam,bateria) {
 return{
    marca,
    tam,
    bateria,
    ligar() {
        console.log('fazendo ligação...')

    }
       
 }
}
const celular1 = criarCel('asus',5.5,5000);
console.log(celular1);


