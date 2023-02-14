//----------------------------------------------
// Curso de JavaqScript em 27/08/2021
// Degmar Barbosa - Programador
//----------------------------------------------
console.log("Curso de JavaqScript");
// velocidade maxima 70 km.
// a cada  5km aqcima do limite ganha um ponto
// Math.Floor()
// caso pontos maior que 20 -> 'Carteira Suspensa'
verificar(110);

function verificar(velo){
    const vmax = 70;
    const kmponto = 5;
    if (velo <= vmax)
       console.log('ok');
    else {
        const pontos = Math.floor(((velo - vmax) / kmponto));
        if(pontos >= 12)
           console.log('Carteira Suspensa');
        else
            console.log('Pontos', pontos);
         
    }
}