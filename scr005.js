//----------------------------------------------
// Curso de JavaqScript em 28/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
// criar um metodo para ler propriedades de um valor e
// exibir apenas do tipo string que estão nesse obeto

const filme = {
    titulo : 'vingaqdores',
    ano : 2021,
    diretor:  'Robin',
    personagem : 'Thor'
}

exibirPro(filme);
function exibirPro(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])

}