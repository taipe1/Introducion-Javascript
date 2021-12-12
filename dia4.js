//                           DIA 4

//EJERCICIO18
// Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
// Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
// Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
// Recorre el arreglo e imprímelo.
// Ingresa un nombre> Camilo
// Ingresa otro nombre> Ariel
// Pedro
// Pablo
// Ariel
// Juan
// Diana
// Camilo

let nombres = [ "Pedro", "Pablo", "María", "Juan", "Diana"];

nombres.push(prompt("Ingrese un nombre: "));
console.log(nombres);

let nombre = prompt("Ingrese otro nombre: ");
nombres[2] = nombre;

nombres.map(e=>{
  console.log(e)
})

//EJERCICIO19
//Escribe un programa que:
// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:
// Ingresa un número> 5
// 1
// 3
// 4
// 5

const numero = parseInt(prompt("Ingrese un numero: "));
let arreglo = [];
for(let i=1;i<=numero;i++){
  arreglo.push(i);
}
let arreglo1 = arreglo.splice(1,1);
arreglo.forEach( e => console.log(e))

//EJERCICIO20
//Imprime la matriz en la consola, el resultado final debe ser el siguiente:
//const mat = [
//   ["Pablo", "Maria", "Pedro"],
//   ["Diana", "Juan", "Federico"],
//   ["Roberto", "Daniel", "Sandra"]
// ];
// Grupo 1:
//   Pablo
//   Maria
//   Pedro
// Grupo 2:
//   Diana
//   Juan
//   Federico
// Grupo 3:
//   Roberto
//   Daniel
//   Sandra

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for(let i = 0;i < mat.length;i++){
  console.log(`Grupo ${i+1}:`)
  for(let j = 0; j < mat[i].length; j++){
    console.log(`  ${mat[i][j]}`);
  }
}

//EJERCICIO21
//Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
nums.filter( e => e > 10).forEach( e => console.log(e))

//EJERCICIO22
// Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
let contador = 0;
console.log("hola")
for(let i=0;i<nums.length;i++){
  if(nums[i] == 1){
    contador++;
  }
}
console.log(contador);



