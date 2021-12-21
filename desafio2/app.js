
// Dado el siguiente código completar para que muestre en pantalla la cantidad de montos mayores de 500. y se debe mostrar el número más grande.
// el script tendrá que mostrar el siguiente mensaje al final:
// La lista tiene x montos totales, de los cuales n son mayores de 500. y m es el número más grande.
// donde x es la cantidad de montos totales,
// n son los cantidad de montos que superan los 500. y m es el número más grande.


var montos = [500, 800, 100, 300, 2400, 4310, 5010, 312, 841, 1410, 3030, 330, 510, 501, 499, 5, 610] 

const desafio = (montos) => {
  const mayores = montos
                       .filter(valor => valor > 500)
                       .sort( (a,b) => b-a);
                       
  return `La lista tiene ${montos.length} montos totales, de los cuales ${mayores.length} son mayores de 500. y ${mayores[0]} es el número más grande`;
};

console.log(desafio(montos));





