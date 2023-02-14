//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("string - tipo primitivo");
console.log("string - tipo objeto");

const msg = 'msg tipo primitivo';
const msg1 = new String('msg1 tipo objeto');

console.log(msg.includes('primitivo'));
console.log(msg.includes('verde'));
console.log(msg.indexOf('primitivo'));
console.log(msg.indexOf('msg'));
console.log(msg.replace('msg','usando replace'));
console.log(msg.trim());
console.log(msg.split(' '));
console.log(msg[0]);

    let  s_prim = "foo";
    let   s_obj = new String(s_prim);
    
    console.log(typeof s_prim); // Loga "string"
    console.log(typeof s_obj);  // Loga "object"

    s1 = "2 + 2";               // cria uma string primitiva
    s2 = new String("2 + 2");   // cria um objeto de String
    console.log(eval(s1));      // retorna o número 4
    console.log(eval(s2));      // retorna a string "2 + 2"
    console.log(eval(s2.valueOf())); // retorna o número 4

    const nome = 'Rafael';

    const email =
    `oi ${nome} ${2+2}
    exemplo de template literal 
    thanks, Deg`;
    console.log(email);



