//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

   function Celular(marca,tam,bateria){
       this.marca = marca,
       this.tam = tam,
       this.bateria = bateria,
       this.ligar = function() {
           console.log('fazendo ligação')
       }

   }

   const celular = new Celular('asus',5.5,5000);
   console.log(celular);