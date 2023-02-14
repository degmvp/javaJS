//----------------------------------------------
// Curso de JavaqScript em 28/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
// receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar

exibirTp(5);
function exibirTp(limite) {
    for (let i =0; i <= limite; i++){
        if ( i % 2 === 0)
           console.log(i, 'Par');
        else
           console.log(i,'Impar');
    }
}
