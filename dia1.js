
//                           DIA 1

//EJERCICIO1
// Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
// Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir en la consola debes utilizar el método console.log().

console.log(prompt("Ingrese una frase: "));

//EJERCICIO2
//Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.
// Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".

console.log(`Hola ${prompt("Ingrese su nombre: ")}`);

//EJERCICIO3
// Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

let numero_uno = parseInt(prompt("Ingrese un numero: "));
let numero_dos = parseInt(prompt("Ingrese un numero: "));
console.log(`La suma es: ${numero_uno + numero_dos}`);

//EJERCICIO4
// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:Tienes 20 años

let anio_nacimiento = parseInt(prompt("Ingrese año de nacimiento: "));
let anio_actual = new Date;
console.log(`Tienes ${anio_actual.getFullYear() - anio_nacimiento} años`);

//EJERCICIO5
// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
// El BMI se calcula con la siguiente formula: peso / altura^2
// Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
// Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728".

const peso = parseFloat(prompt("Ingrese su peso: "));
const altura = parseFloat(prompt("Ingrese su altura: "));
let bmi = peso / (altura * altura);
console.log(`Tu bmi es ${bmi}`)


