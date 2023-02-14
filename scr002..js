//----------------------------------------------
// Curso de JavaqScript em 27/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

// operadores ternario
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
// operador logico e (&&)
console.log(tipo);
let maiorId = false;
let clt = true;
let aprovado = maiorId && clt;
console.log(aprovado);  
// operador logico ou (||)
let aprov = maiorId || clt;
console.log(aprov);  
// operador NOT (!)
let testado = true;
let recusado = !testado;
console.log(recusado);
// falsy - undefined - null - 0 - false - ' ' - NaN not a number
console.log(false || 'rafael');
console.log(false || 'l');
console.log(false || 3 || 1);

let corV = 'DGB';
let corB = 'Blue';
//let matrix = corV || corB;
let matrix = corV && corB;
console.log(matrix);

// Trocar valores de variaveis
let x = 3;
let y = 7;
console.log(x, y);

x = x ^ y;
console.log(x);

y = y ^ x;
console.log(y);

x = x ^ y;
console.log(x, y);

let xx = 2 ** 31;
xx += xx;
console.log(xx);

let hora = 13;
if(hora > 6 && hora < 12){
    console.log('Bom dia!');
}
else if ( hora > 12 && hora < 18){
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!');
}

let permiss = 'diretor';

switch(permiss){
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;   

    case 'diretor':
    console.log('usuario diretor');
    break;      
 
    default:
    console.log('usuario inexistente');
  
}

// loopings 1- for
//          2- while 
//          3- do..while 
//          4- for.. in 
//          5- for..of

for( i = 0; i < 5; i++){
    if(i % 2 !== 0) {
        console.log('impar',i);
    }
    console.log('loopings for ++', i);
}

let j = 0;
while (j < 5){
    console.log('loopings while ++', j);
    ++j;

}

let w = 5;
while (w >= 1){
    console.log('loopings while --', w);
    --w;
}

let yy = 0;
do {
    console.log('loopings do while ++', yy);
    ++yy;
} while (yy < 5);

const pessoa = {
    nome: 'Degmar',
    idade: 76
};
for(let ix in pessoa){
     console.log(ix,pessoa[ix]);
}

const cores = ['vermelha', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice,cores[indice])
}

for(let cor of cores){
    console.log(cor);
}
function max(num1,num2) {
    return num1 > num2 ? num1: num2;
}

console.log(' o maior numero e: ', max(31,45));

function min(num1,num2) {
    return num1 < num2 ? num1: num2;
}

console.log(' o menor numero e: ', min(31,45));

// divisivel por 3 Fizz
// divisivel por 5 Buzz
// divisivel por 3 e 5 FizzBuzz
// Nao divisivel por 3 ou 5 => entrada
// Não é um numero => 'Nao é um numero'

const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Nao é um numero';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
       return 'Fizz';
    if (entrada % 5 === 0)
       return 'Buzz';
    
    return entrada;
}

