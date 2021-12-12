//                           DIA 2

//EJERCICIO6
// Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
// Si es mayor debe imprimir "El número es mayor a 10".
// Si es menor debe imprimir "El número es menor o igual a 10".

const numero = parseInt(prompt("Ingrese un numero: "));
const resultado = (numero > 10) ? "El número es mayor a 10" : "El número es menor o igual a 10" ;
console.log(resultado);

//EJERCICIO7
//Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

let valor_auxiliar = parseInt(Math.random()*(10) + 1);
const numero = parseInt(prompt("Ingrese el numero: "));
let resultado = (numero === valor_auxiliar)?"Felicitaciones, ese era!":
                "Lo siento, intenta nuevamente!";
console.log(resultado);

//EJERCICIO8
//Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

const numero = parseInt(prompt("Ingrese un numero: "));
const resultado = (numero%5==0)?`Si, el número ${numero} es múltiplo 5`:`No, el número ${numero} no es múltiplo de 5`;
console.log(resultado);

//EJERCICIO9
//Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
// Si el número es menor a 10 debe imprimir "El número es menor que 10".
// Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
// Si el número es igual a 10 debe imprimir "El número es igual a 10".

const digito = parseInt(prompt("Ingrese un numero: "));
const resultado = (digito>10) ?"El número es mayor que 10": 
                  (digito<10) ? "El número es menor que 10": 
                  "El número es igual a 10";
console.log(resultado);

//EJERCICIO10
//Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:
// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

const peso = parseFloat(prompt("Ingrese su peso: "));
const altura = parseFloat(prompt("Ingrese su altura: "));
let bmi = peso / (altura * altura);
const resultado = (bmi < 18.5) ? "Bajo de peso":
                  (bmi >= 18.5 && bmi <= 24.9) ? "Normal":
                  (bmi >= 25 && bmi <= 29.9) ? "Sobrepeso": 
                   "Obeso" ;
console.log(resultado);

//EJERCICIO11
//Escribe un programa que le pida al usuario ingresar un número.
// Si el número es múltiplo de 3 debe imprimir en la consola "bing".
// Si el número es múltiplo de 5 debe imprimir en la consola "bong".
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

const numero = parseInt(prompt("Ingrese un numero: "));
const multiplo = (numero%5==0 && numero%3==0) ? "bingbong":
                 (numero%5==0) ? "bong":
                 (numero%3==0) ? "bing":
                 numero;
console.log(multiplo);


