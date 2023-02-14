//----------------------------------------------
// Curso de JavaqScript em 28/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

const array = [90,70,80];
console.log(media(array));

function media(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
        
    }
    const media = soma/(notas.length);

    if(media < 59) return 'F';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A'

}
console.log(calcularmedia(array));

function calcularmedia(array){
    let add = 0;
    for (let val of array) {
        add += val;
}
console.log(media(array));
return add/(array.length);
}