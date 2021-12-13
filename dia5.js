//                           DIA 5

//EJERCICIO23
//Escribe un programa que le pida una frase al usuario y la repita en mayúsculas. Por ejemplo:
// Ingresa una frase> Hola Mundo
// HOLA MUNDO

let frase = prompt("Ingrese frase: ");
console.log(frase.toUpperCase());

//EJERCICIO24
//Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:
// Ingresa una frase> Hasta la próxima
// La frase tiene 4 caracteres "a"

let frase = prompt("Ingrese frase: ");
let contador = 0;
for(let i=0;i<frase.length;i++){
  if(frase[i] === 'a'){
    contador++;
  }
}
console.log(`La frase tiene ${contador} caracteres 'a'`);

//EJERCICIO25
// Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:
// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter "a" por "4".
// Reemplaza el caracter "e" por "3".
// Reemplaza el caracter "i" por "1".
// Reemplaza el caracter "o" por "0".
//ejemplo: Ingresa una frase> esta es una prueba
// 3st43sun4pru3b4

let frase = prompt("Ingrese frase: ")
            .replaceAll(" ","")
            .replaceAll("a", 4)
            .replaceAll("e", 3)
            .replaceAll("i", 1)
            .replaceAll("o", 0);
console.log(frase)

//EJERCICIO26
//Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:
// Ingresa una frase> esta es una prueba
// Esta Es Una Prueba

let frase = prompt("Ingrese frase: ").split(" ");
let a = frase.map( e => e.replace(e[0],e[0].toUpperCase())).join(" ");
console.log(a);

//EJERCICIO27
//Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:
// Ingresa una frase> esta es una prueba
// esta
// es
// una
// prueba


let frase = prompt("Ingrese frase: ").split(" ");
frase.forEach( e => console.log(e));

//EJERCICIO28
//Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".
// Ejemplo 1:
// Ingresa frase 1> German
// Ingresa frase 2> Gabriela
// Los caracteres en común son: G, e, r, a

let frase1 = prompt("Ingrese frase1: ");
let frase2 = prompt("Ingrese frase2: ");
let aux = [];
let c = 0;
for(let i=0;i<frase1.length;i++){
  if(frase2.includes(frase1[i])){
    aux.push(frase1[i]);
    c++;
  }
}
if(c!==0){
  console.log(aux.join(","));
}
else{
  console.log("No se encontraron caracteres en comun")
}


