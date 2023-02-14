class Carro {
    constructor(vl1,vl2,vl3,vl4) {
        this.marca = vl1;
        this.modelo = vl2;
        this.ano = vl3;
       }
    buzina() {
        return this.modelo + " buzina biip.."
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);

console.log(uno);
console.log(gol);
console.log(gol.buzina());
/////////////////////////////
//convert de objeto para JSON
/////////////////////////////
let texto = JSON.stringify(uno);
document.getElementById("tx").innerHTML = texto;
let texty = JSON.stringify(gol);
document.getElementById("ty").innerHTML = texty;
let textt = JSON.stringify(gol.buzina());
document.getElementById("tt").innerHTML = textt;

/////////////////////////////
//convert de texto para bjeto JSON
/////////////////////////////

let obj = JSON.parse(texto);
document.getElementById("tf").innerHTML = obj.modelo;


// Manipulação de datas

let data = new(Date);
let ano = data.getUTCFullYear()
let mes = data.getMonth();
let dia = data.getDate();
let dse = data.getDay();
let hora = data.getHours();
let minu = data.getMinutes();
let segu = data.getSeconds();

d = new Date();
diames = d.getDate();
mes = d. getMonth() + 1;
ano = d.getFullYear();

let datapadr = addZero(diames) + "/" +addZero(mes) + "/" + ano;
console.log(datapadr);

let datacerta = data.toLocaleDateString('pt-BR', {dateStyle: "short"});
function addZero(x) { return x < 10 ? '0' + x : '' + x;};

console.log(datacerta);
