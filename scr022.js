//----------------------------------------------
// Curso de JavaqScript em 19/09/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Arrays manipulação dos elementos");
const num = [1,2,3,4,5,6];
console.log(num);
//Inicio
num.unshift(88);
console.log(num);
//Meio
num.splice(2,0,'Deg');
console.log(num);
//Final
num.push(1945);
console.log(num);

console.log(num.indexOf(2));
console.log(num.lastIndexOf(5));
console.log(num.indexOf(2) !== -1);
console.log(num.includes(2));

const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

const mk = marcas.find(function(mk){
    return mk.nome === 'a';
})
console.log(mk);
// Arrow functions

console.log(marcas.find(marca => mk.nome === 'a'));

const vet = [1,2,3,4,5,6];
vet.push();
vet.unshift();
vet.splice();

//removendo elementos
//Final
const ultimo = vet.pop();
console.log(ultimo);
console.log(vet);
//Inicio
const primeiro = vet.shift();
console.log(primeiro);
console.log(vet);
//Meio
const meio = vet.splice(2,1);
console.log(meio);
console.log(vet);
// esvaziando um array
const vetz = [1,2,3,4,5,6,7,8,9];
console.log(vetz);
anyvet = vetz;
console.log(anyvet);
//solução 1
vetz.length = 0;
console.log(vetz);
console.log(anyvet);