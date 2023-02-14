//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Criar um objeto postagem");

function Postagem(titulo,msg,autor){
    this.titulo = titulo,
    this.msg = msg,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [
        { autor: 'a', msg: 'b'},
        { autor: 'a', msg: 'b'}
    ],
    this.alive = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);