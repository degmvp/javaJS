//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Operador Bitwise");

let a = 15;
// 00000101
let b = 5;
// 00000001
 
//   00000101
// & 00000001
let c = a & b;
//   00000001
 
function var_dump(r){
    console.log(r)
}

console.log('operação bitwise and.... & ');  
k = a & b;
var_dump(k);
console.log('operação bitwise or..... |');
k = a | b;
var_dump(k);
console.log('operação bitwise xor.....^');
k = a ^ b;
var_dump(k);
console.log('operação bitwise not.....~');
k = ~a;
var_dump(k);
k = ~b;
var_dump(k);
console.log('operação bitwise shiftR..>>');
k =  a << 3;
var_dump(k);
console.log('operação bitwise shiftL..>>');
k =  a >> 3;
var_dump(k);

// #9bb226
// DEC: 10203686
// BIN: 100110111011001000100110
let color = 0x9bb226;
 
//   000000000000000010011011
// &                 11111111
let r = (color >> 16) & 0xFF;
//                   10011011
 
//   000000001001101110110010
// &                 11111111
let g = (color >>  8) & 0xFF;
//                   10110010
 
//   100110111011001000100110
// &                 11111111
let x =  color        & 0xFF;
//                   00100110
 
console.log("Red: , Green: , Blue: ", r, g, x);
// Resultado
// Red: 155 Green: 178 Blue: 38


r = 155;
g = 178;
x = 38;
// Resultado
// Cor: #9bb226

function decToHexString(number)
{
  if (number < 0)
  {
    number = 0xFFFFFFFF + number + 1;
  }

  return number.toString(16).toUpperCase();
}

console.log(decToHexString(r));
console.log(decToHexString(g));
console.log(decToHexString(x));
console.log('#' + decToHexString(r) + decToHexString(g) + decToHexString(x));

function decToHex(d, padding) {
    var hex = Number(d).toString(16).toUpperCase();
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

console.log(decToHex(r));