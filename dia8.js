//                           DIA 8

//EJERCICIO41
//Imprime todos los elementos del arreglo utilizando el método forEach:

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

// escribe tu código acá
arr.forEach( e => {
  console.log(e)
})

//EJERCICIO42
//Escribe una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares que existen en el arreglo:

// escribe la función acá
const pares = (arr) => arr.filter( e =>  e%2==0)
// código de prueba
console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
console.log(pares([7, 921, 43, 9649])) // []

//EJERCICIO43
//Escribe una función llamada posPares que reciba un arreglo y retorne un nuevo arreglo con los valores en las posiciones pares del arreglo que llega como argumento.

// escribe tu función acá
// escribe tu función acá
const posPares = (arreglo)=> {
  const auxiliar = arreglo.filter( (valor,indice) => indice%2==0)
  return auxiliar;
}
// código de prueba
console.log(posPares(["a", "b", "c"])) // ["a", "c"]
console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
console.log(posPares([])) // []

//EJERCICIO44
//Escribe una función llamada multiplicar que reciba un arreglo (de números) y un número. La función debe retornar un nuevo arreglo con cada número multiplicado por segundo número:

// escribe tu función acá
const multiplicar = (arreglo,numero)=> {
  let aux = []
  arreglo.map( e => aux.push(e*numero))
  return aux;
}
// código de prueba
console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
console.log(multiplicar([7, 4], 3)) // [21, 12]
console.log(multiplicar([], 10)) // []

//EJERCICIO45
//Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

// escribe tu función acá
const productosBaratos = (obj)=> obj.filter(e => e.precio>=5 && e.precio<=10).map(e => e.nombre)
// código de prueba
let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]





