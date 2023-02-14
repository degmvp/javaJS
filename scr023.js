//----------------------------------------------
// Curso de JavaqScript em 19/09/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Arrays concatenando e cortando elementos");
const num = [1,2,3,4,5,6];
console.log(num);
const  alf = ['a','b','c'];
console.log(alf);
// concatenar
const twoarray = num.concat(alf);
console.log(twoarray);
// Slice
const part1 = twoarray.slice(3,9);
console.log(part1);
const part2 = twoarray.slice(5);
console.log(part2);
// Spread
const comb = [...num,...alf];
console.log(comb);
const comb1 = [...num,'deg',...alf,'marto'];
console.log(comb1);
//clone
const clonado = [...comb1];
console.log(clonado);
// forEach
const numeros = [1,2,3,4,5,6,7,8,9];

numeros.forEach(function(numero){
    console.log(numero);
})
numeros.forEach((numero,indx) => console.log(numero,indx))
//formatando arrays
const forma = numeros.join('.');
console.log(forma);

