//----------------------------------------------
// Curso de JavaqScript iniciado em 08/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Variaveis no Javascript");
let nulo = null;          // redefinir um valor(null)    
let ok = true;           // boolean
let nome = 'Degmar';     // string literal
let idade = 76;          // number literal
let altura = 1.90;
console.log('ok: ',ok);
console.log('nome: ',nome);
console.log('altura',altura);
console.log('idade',idade);
console.log('//------------------------------//')
console.log('//Degmar Barbosa - 08/08/2021---//')
console.log('//------------------------------//')
console.log(typeof idade);
console.log(typeof altura);
console.log('//------------------------------//')
console.log("Criar um objeto no Javascript");
let pessoa = {
    nome:  'Jany',
    idade: 40,
    curso: true,
    sobrenome: 'leite'
};

console.log(typeof pessoa);
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.curso);
console.log(pessoa.sobrenome);
console.log('//------------------------------//');

console.log("//arrays");
let familia = [33,35,38,76,'Jany'];
console.log(familia);
console.log(familia[4]);
console.log(familia[1]);
console.log(familia.length);

function expo(valor){
    return 2 ** valor;
}
let resu31 = expo(31);
console.log(resu31);
let resu64 = expo(64);
console.log(resu64);
let resu128 = expo(128);
console.log(resu128);
console.log(typeof resu31);
console.log(typeof resu64);
console.log(typeof resu128);
console.log('operadores aritmedticos');
console.log('operadores atrbuição');
console.log('operadores comparação');
console.log('operadores logicos');
console.log('operadores bitwise');
console.log('comewntarios marca e ctrl ;')
const x = 340282366920938463463378607431768211456
const y = 2 ** 128
let r = x - y
console.log('O resultado de r:',r )

let corSite = " "; 
function alteraCor(cor,tona){
    corSite = cor + tona;
};
alteraCor('verde',' claro');
console.log(corSite);

// operadores aritimeticos incremento e decremento
let a =10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log('//------------------------------//');
console.log('pos-incremento ', a++   );
console.log(a     );
console.log('pre-incremento ', ++a   );
console.log(a     );

console.log('//------------------------------//');
console.log('pos-decremento ', a--   );
console.log(a     );
console.log('pre-decremento ', --a   );
console.log(a     );

// operadores  de atribuição
let w = 1945;
w += w;
console.log(w);
w -= w;
console.log(w);

let z = 45;
z /= 3;
console.log(z);
z *= z;
console.log(z);

// operadores  de igualdade

console.log( 1 === 1);
console.log( '1' === 1);
console.log( 1 === 1);

// operadores ternario
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);
var objs =  
[{
    "time": "Corinthians",
    "estadio":{
        "nome":"Arena do curingao",
        "publico_record": 63267,
        "capacidade":null  
    },
    "jogadores": [{
        "nome": "Cassio",
        "idade": 33,
        "titular": true,
        "times":["Gremio", "PSV", "Corinthians"]
    },
    { 
        "nome": "Luan",
        "idade": 27,
        "titular": false,
        "times":["Gremio", "Corinthians"]
    }]
}]
console.log(objs);