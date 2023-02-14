//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
function wrt(msg){
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~' );
    console.log('      ' + msg);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~' );
}
wrt('Degmar Barbosa');
console.log("Faixa de precos");
console.log("Primeira opcao - array");
let faixas = [
    {tooltip: 'ate $700', minimo:0, maximo: 700}, 
    {tooltip: 'de $700 a $1000', minimo:0, maximo: 1000}, 
    {tooltip: 'ate $1000 ou mais', minimo:1000, maximo: 9900}
];
console.log(faixas);
console.log("Segunda opcao - Factory Function");

function criafaixa(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

faixa2 = [
    criafaixa('a,',1,100),
    criafaixa('b,',100,1000),
    criafaixa('c,',1000,10000),
]

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new  FaixaPreco('d',10,20),
    new  FaixaPreco('e',20,30),
    new  FaixaPreco('f',30,40),
]

console.log(faixa2);
console.log("terceira opcao - Constructor Function");
console.log(faixas3);