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
   console.log('**************************')
   console.log('obj_clone')
   console.log('**************************')
   const obj_clone = {...celular};
   console.log(obj_clone);

   const novo_obj = Object.assign({
       memory: '64 KB'
   }, celular);
   console.log(novo_obj);