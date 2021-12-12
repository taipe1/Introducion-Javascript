//                           DIA 3

//EJERCICIO12
//Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.
// Nota: utiliza un ciclo para imprimir la frase las 10 veces.

let frase = prompt("Ingrese frase: ");
for(let i=0;i<10;i++){
  console.log(frase);
}

//EJERCICIO13
//Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.
// Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:
// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo
// Hola Mundo

const frase = prompt("Ingrese frase: ");
const numero = parseInt(prompt("Ingrese numero: "));
for(let i=0;i<numero;i++){
  console.log(frase)
}

//EJERCICIO14
//Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.
// Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir: 1 2 3 4 5 

const numero = parseInt(prompt("Ingrese un numero: "));
for(let i=1;i<=numero;i++){
  console.log(i)
}

//EJERCICIO15
//Escribe un programa para la consola que le pida al usuario un número y sume todos los números desde 1 hasta ese número.
// Por ejemplo, si el usuario ingresa el número 5, el programa debe imprimir 15 (1+2+3+4+5). Si el usuario ingresa el número 10, el programa debe imprimir 55.

const numero = parseInt(prompt("Ingrese un numero: "));
let suma = 0;

for(let i = 1; i<=numero; i++){
  suma = suma +i
}
console.log(suma)

//EJERCICIO16
//Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:
// 5
// 6
// 7
// 8
// 9
// 10
// Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.
// Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.

const numero_uno = parseInt(prompt("Ingrese primer numero: "));
const numero_dos = parseInt(prompt("Ingrese segundo numero: "));

for(let i=numero_uno; i<=numero_dos;i++){
  console.log(i)
}

//EJERCICIO17
//Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let valor_auxiliar = parseInt(Math.random()*(10) + 1);

while(true){
  const numero = parseInt(prompt("Ingrese el numero: "));
  if(numero == valor_auxiliar){
    console.log("felicidades, numero encotrado!!");
    break;
  }
  else{
    continue;
  }
}






