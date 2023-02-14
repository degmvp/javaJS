//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
console.log("Criar um objeto endereço :");

let endereco = {
    rua: 'jose alfredo 173',
    cidade : 'joao pessoa',
    cep : '58035-100'
};

function exibe(endereco) {
    for (let i in endereco)
        console.log(i, endereco[i]);
       
}

exibe(endereco);
console.log(new Date().toString());

// Date
const data1 = new Date();
const data2 = new Date('Sep 18 2021 23:25');
const data3 = new Date(2021,08,18,23,27);
console.log(data1);
console.log(data2);
data3.setFullYear(2030);
console.log(data3);

