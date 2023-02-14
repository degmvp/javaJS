//----------------------------------------------
// Curso de JavaqScript em 28/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

// Multiplos de (3, 5)
// armazenar e somar

somarMul(10);
//somarMul(30);
function somarMul(limite) {
    let m3 = 0;
    let m5 = 0;
    for (i=0; i <= limite; i++){
        if(i % 3 ===0){
            console.log(i);
            console.log(m3 += i);

        }

        if(i % 5 ===0)
            console.log(m5 += i);       
    }
    console.log(m3 + m5);    
}
