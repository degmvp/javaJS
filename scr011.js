//----------------------------------------------
// Curso de JavaqScript em 31/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");

function criarCliente(nome,cpf,agencia,saldo) {
    return{
        nome,
        cpf,
        agencia,
        saldo,
         
    }
   }
const cadastro = criarCliente('Degmar','03890805434','0974',1940);
console.log(cadastro);

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = '03890805434';
cliente1.agencia = 3488;
cliente1.saldo = 110;


cliente2.nome = "Alice";
cliente2.cpf = '88822233309';
cliente2.agencia = 3488;
cliente2.saldo = 800;

console.log(cliente1,cliente2);
