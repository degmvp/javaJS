//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Criar um objeto endereço:");

let endereco = {
    rua: 'jose alfredo 173',
    cidade : 'joao pessoa',
    cep : '58035-100'
};

console.log(endereco);

function Endereco(rua,cidade,cep)  {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
};

const campo1 = new Endereco('a','b','c');
const campo2 = new Endereco('a','b','c');

function saoiguais(campo1,campo2) {
 return   campo1.rua === campo2.rua &&
          campo1.cidade === campo2.cidade &&
          campo1.cep === campo2.cep


}

console.log(campo1);
console.log(campo2);

console.log(saoiguais(campo1,campo2));

function address_iguais(campo1,campo2){
    return campo1 === campo2;
}
console.log(address_iguais(campo1,campo2));

