//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Factory Function - scr011.js");
console.log("Constructor  Function - scr012.js");
console.log("Natureza dinamica dos objetos -scr013,js");

const mouse = {
    cor :   'verde',
    marca : 'logitech'

}

console.log(mouse);
mouse.velocidade = 5000;
mouse.tipo = 'usb';
console.log(mouse);
mouse.trocarDPI = function() {
    console.log('MUDANDO DPI');
}
console.log(mouse);
delete mouse.trocarDPI;
delete mouse.velocidade;
console.log(mouse);