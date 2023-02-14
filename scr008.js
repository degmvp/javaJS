//----------------------------------------------
// Curso de JavaqScript em 28/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

exibir(10);

function exibir(linhas) {
    for (let row = 1; row <= linhas; row++){
        let padrao = ' ';
        for(let i = 0; i < row; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
 asterisco(15);   
function asterisco(lines) {
    let ast = ' ';
    for (let i = 1; i <= lines; i++) {
        ast += '*';
        console.log(ast);
    } 
}

}

