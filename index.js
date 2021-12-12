//             Dia1
// Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728"

// const peso = prompt("Ingrese su peso: ");
// const altura = prompt("Ingrese su altura");
// let bmi = peso/(altura*altura);
// console.log(`El bmi es: ${bmi}`)

// Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

// const anioNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
// const anioActual = new Date().getFullYear();
// console.log(`Tienes ${anioActual - anioNacimiento} años`);



//                           DIA 2

//EJERCICIO6
// Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.
// Si es mayor debe imprimir "El número es mayor a 10".
// Si es menor debe imprimir "El número es menor o igual a 10".

// const numero = parseInt(prompt("Ingrese un numero: "));
// const resultado = (numero > 10) ? "El número es mayor a 10" : "El número es menor o igual a 10" ;
// console.log(resultado);

//EJERCICIO7
//Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"

// let valor_auxiliar = parseInt(Math.random()*(10) + 1);
// const numero = parseInt(prompt("Ingrese el numero: "));
// let resultado = (numero === valor_auxiliar)?"Felicitaciones, ese era!":"Lo siento, intenta nuevamente!";
// console.log(resultado);

//EJERCICIO8
//Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.
// Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.
// Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".

// const numero = parseInt(prompt("Ingrese un numero: "));
// const resultado = (numero%5==0)?`Si, el número ${numero} es múltiplo 5`:`No, el número ${numero} no es múltiplo de 5`;
// console.log(resultado);

//EJERCICIO9
//Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.
// Si el número es menor a 10 debe imprimir "El número es menor que 10".
// Si el número es mayor a 10 debe imprimir "El número es mayor que 10".
// Si el número es igual a 10 debe imprimir "El número es igual a 10".

// const digito = parseInt(prompt("Ingrese un numero: "));
// const resultado = (digito>10) ?"El número es mayor que 10": 
//                   (digito<10) ? "El número es menor que 10": 
//                   "El número es igual a 10";
// console.log(resultado);

//EJERCICIO10
//Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:
// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

// const peso = parseFloat(prompt("Ingrese su peso: "));
// const altura = parseFloat(prompt("Ingrese su altura: "));
// let bmi = peso / (altura * altura);
// const resultado = (bmi < 18.5) ? "Bajo de peso":
//                   (bmi >= 18.5 && bmi <= 24.9) ? "Normal":
//                   (bmi >= 25 && bmi <= 29.9) ? "Sobrepeso": 
//                    "Obeso" ;
// console.log(resultado);

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

















// Dia 2
// Escribe un programa que le pida al usuario ingresar un número.
// Si el número es múltiplo de 3 debe imprimir en la consola "bing".
// Si el número es múltiplo de 5 debe imprimir en la consola "bong".
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.

// const numero = parseInt(prompt("Ingrese un numero: "));

// if(numero%3 === 0 && numero%5 ===0){
//   console.log("bingbong");
// }else if(numero%3 === 0){
//   console.log("bing")
// }else{
//   console.log("bong")
// }


//dia 3



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

// let nombres = [ "Pedro", "Pablo", "María", "Juan", "Diana"];
// nombres.push(prompt("Ingrese un nombre: "));
// console.log(nombres);
// let nombre = prompt("Ingrese otro nombre: ");
// nombres[2] = nombre;
// nombres.map(e=>{
//   console.log(e)
// })

// const mat = [
//   ["Pablo", "Maria", "Pedro"],
//   ["Diana", "Juan", "Federico"],
//   ["Roberto", "Daniel", "Sandra"]
// ];

// for(let i = 0;i < mat.length;i++){
//   console.log(`Grupo ${i+1}:`)
//   for(let j = 0; j < mat[i].length; j++){
//     console.log( mat[i][j]);
//   }
// }


// dia 5

// // Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".
// Ingresa frase 1> German
// Ingresa frase 2> Gabriela
// Los caracteres en común son: G, e, r, a
// Escribe un programa que le pida una frase al usuario y la repita en mayúsculas. Por ejemplo:


// Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

// Ingresa una frase> Hasta la próxima
// La frase tiene 4 caracteres "a"

// Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:
// Las mayúsculas se reemplazan por minúsculas.
// Se eliminan los espacios en blanco.
// Reemplaza el caracter "a" por "4".
// Reemplaza el caracter "e" por "3".
// Reemplaza el caracter "i" por "1".
// Reemplaza el caracter "o" por "0".

// let frase = prompt("Ingrese frase: ").replaceAll(" ","").replaceAll("a", 4).replaceAll("e", 3).replaceAll("i", 1).replaceAll("o", 0);
// console.log(frase)

// Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:
// Ingresa una frase> esta es una prueba
// Esta Es Una Prueba

// let frase = prompt("Ingrese frase: ").split(" ");
// let conca = " "
// frase.map( e=>{
//   if(!e[0]){
//     conca = conca + e[0].toUpperCase();
//   }
//   else{
//     conca = conca + e;
//   }
// })
// console.log(conca);


// Ingresa una frase> esta es una prueba
// esta
// es
// una
// // prueba

// let frase = prompt("Ingrese una frase: ").split(" ");
// frase.map( e => {
//   console.log(e)
// })



// Ingresa frase 1> German
// Ingresa frase 2> Gabriela
// Los caracteres en común son: G, e, r, a
// let frase1 = prompt("Ingrese frase1: ");
// let frase2 = prompt("Ingrese frase2: ");
// let aux = [];
// let contador = 0;
// for(let i=0;i<frase1.length;i++){
//   if(frase2.includes(frase1)){
//     aux.push(frase1);
//     c++;
//   }
// }
// if(c!==0){
//   console.log(aux);
// }
// else{
//   console.log("No se encontraron caracteres ne comun")
// }




// Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.
// // escribe la función acá
// // código de prueba
// console.log(promedio([1, 2, 3, 4])) // 2.5
// console.log(promedio([7, 8, 9])) // 8
// console.log(promedio([300, 100])) // 200

// const promedio = (arreglo)=>{
//   let sumador = 0;
//   arreglo.map( e=>{
//     sumador = sumador + e;
//   })
//   return sumador/arreglo.length;
// }
// console.log(promedio([1, 2, 3, 4])) // 2.5
// console.log(promedio([7, 8, 9])) // 8
// console.log(promedio([300, 100])) // 200


// escribe la función acá

// // código de prueba
// console.log(capitalizar("pedro perez")) // "Pedro Perez"
// console.log(capitalizar("make it real")) // "Make it Real"

// function calcularColor(num) {
//   let color = ""
//   if (num === 1) {
//     color = "negro";
//   } else if(num === 2) {
//     color = "blanco";
//   } else if (num === 3) {
//     color = "azul";
//   } else {
//     color = "verde";
//   }
//   return "El color es " + color;
// }
// // código de prueba
// console.log(calcularColor(1)) // "El color es negro"
// console.log(calcularColor(2)) // "El color es blanco"
// console.log(calcularColor(3)) // "El color es azul"
// console.log(calcularColor(8)) // "El color es verde"



// // escribe la función bmi acá
// const bmi = (peso, altura)=>{
//   return peso/(altura*altura);
// }

// // código de prueba
// console.log(bmi(65, 1.8)) // 20.061728395061728
// console.log(bmi(72, 1.6)) // 28.124999999999993
// console.log(bmi(52, 1.75)) //  16.979591836734695



// // escribe la función acá
// function capitalizar(texto){
//   let aux = texto.split(" ")
//             .filter(e => e != '')
//             .map(e => e.replace(e[0],e[0].toLocaleUpperCase())).join(" ");
//   return aux; 
// };
// // código de prueba
// console.log(capitalizar("pedro perez")) // "Pedro Perez"
// console.log(capitalizar("make it real")) // "Make it Real"




// const pedro = {
// nombre : "Pedro Perez",
// edad : 30,
// activo: true,
// hobbies :["programar", "squash", "piano"]
// }

// console.log(pedro.edad)
// pedro.estatua = 1.8;
// delete pedro.activo;
// for(const iter in pedro){
//   console.log(`${iter}: ${pedro[iter]}`)
// }

// // escribe tu función acá
// const frecuencias = (texto)=> {
//   return  texto.replaceAll(" ","").split("");
// }
// // código de prueba
// console.log(frecuencias("hola mundo"));
// // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

// console.log(frecuencias("anita lava la tina"));
// // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }


//     var gonzalo={
//         birthDay: 1978,
//         calculateAge: function(){
//             return this.age= 2020-this.birthDay; //AQUI THIS.AGE GUARDAMOS EL RESULTADO DEL 2020-THIS.BIRTHDAY
//         }
//     }
//     console.log(gonzalo.calculateAge());

// // escribe tu código acá
// var persona = {
//   peso:65,
//   estatura:1.8,
//   bmi:function(){
//     const valor = this.peso/(this.estatura*this.estatura);
//     return valor;
//   }
// }
// // código de prueba
// console.log(persona.bmi()); // 20.061728395061728



// // escribe tu función acá
// const descifrar = (texto,obje) => {
//   for(let inte in obje){
//     texto = texto.replace(inte,obje[inte]);
//   }
//   return texto;
// }
// // código de prueba
// console.log(descifrar("h0l4", { 0: "o", 4: "a" })); // "hola"
// console.log(descifrar("pyrmizo", { y: "e", z: "s" })); // "permiso"
// console.log(descifrar("igual", { h: "n" })); // "igual"


// Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) y retornar el objeto encontrado.
// Si no encuentra un objeto con ese id deberá retornar null.
// escribe tu función acá
// const buscarProducto = (arreglo, numero)=> {
//   for(let i=0;i<arreglo.length;i++){
//     if(arreglo[i].id == numero){
//       return arreglo[i];
//     }
//     else{
//       return null;
//     }
//   }
// }
// // código de prueba
// let productos = [
//   { id: 1, nombre: "A" },
//   { id: 2, nombre: "B" },
// ];
// console.log(buscarProducto(productos, 1)); // { id: 1, nombre: "A" }

// productos = [
//   { id: 1, nombre: "A" },
//   { id: 2, nombre: "B" },
// ];
// console.log(buscarProducto(productos, 566)); // null



// escribe tu función acá
// ``const saludar = (objecto)=> {
//   if(objecto.edad){
//     return (`Hola ${objecto.nombre}, tienes ${objecto.edad} años`);
//   }
//   else{
//     return (`Hola ${objecto.nombre}`);
//   }
// }
// // código de prueba
// const pedro = { nombre: "Pedro", edad: 23 };
// console.log(saludar(pedro)); // "Hola Pedro, tienes 23 años"

// const maria = { nombre: "Maria", edad: 35 };
// console.log(saludar(maria)); // "Hola Maria, tienes 35 años"

// const juan = { nombre: "Juan" };
// console.log(saludar(juan)); // "Hola Juan"``


// dia 8

// const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34]

// // escribe tu código acá
// arr.forEach( e => {
//   console.log(e)
// })



// // escribe la función acá
// const pares = (arr) => arr.filter( e =>  e%2==0)

// // código de prueba
// console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
// console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
// console.log(pares([7, 921, 43, 9649])) // []



// // escribe tu función acá
// const productosBaratos = (obj)=> {
//   let aux = []
//   obj.map(e => {
//     if(e.precio>=5 && e.precio<=10){
//       aux.push(e.nombre);
//     }
//   })
//   return aux;
// }
// // código de prueba
// let prods = [
//   { nombre: "Arroz", precio: 5 },
//   { nombre: "Pan", precio: 3 },
//   { nombre: "Tomate", precio: 8 },
//   { nombre: "Leche", precio: 15 }
// ];
// console.log(productosBaratos(prods)); // ["Arroz", "Tomate"]



// // escribe tu función acá
// const multiplicar = (arreglo,numero)=> {
//   let aux = []
//   arreglo.map( e => aux.push(e*numero))
//   return aux;
// }
// // código de prueba
// console.log(multiplicar([1, 2, 3], 2)) // [2, 4, 6]
// console.log(multiplicar([7, 4], 3)) // [21, 12]
// console.log(multiplicar([], 10)) // []




// // escribe tu función acá
// const posPares = (arreglo)=> {
//   const auxiliar = arreglo.filter( (valor,indice) => indice%2==0)
//   return auxiliar;
// }

// // código de prueba
// console.log(posPares(["a", "b", "c"])) // ["a", "c"]
// console.log(posPares([0, 1, 2, 3, 4])) // [0, 2, 4]
// console.log(posPares([])) // []



// // escribe la función acá
// const pares = (arreglo)=> {
//   const auxiliar = arreglo.filter( e => e%2==0 );
//   return auxiliar;
// }
// // código de prueba
// console.log(pares([0, 1, 2, 3, 4])) // [0, 2, 4]
// console.log(pares([120, 876, 934, 1298])) // [120, 876, 934, 1298]
// console.log(pares([7, 921, 43, 9649])) // []


// diaa 9
// // escribe acá tu función flecha
// const hola = (nombre="Pedro")=> {
//   return `Hola ${nombre}!`
// }
// // código de prueba
// console.log(hola()) // "Hola Pedro!"
// console.log(hola("Maria")) // "Hola Maria!"


// const arr = [1, 2, 3, 4]
// // escribe acá tu respuesta
// const [first,second] = arr;
// // código de prueba
// console.log(first) // 1
// console.log(second) // 2
// // barra
// const person = {
//   name: "Pedro",
//   age: 20
// }
// // escribe tu respuesta acá
// const {name,age}= person;
// // código de prueba
// console.log(name) // "Pedro"
// console.log(age)


// escribe tu solución acá
// const auto = {
//   velocidad : 0,
//   acelerar(){
//     this.velocidad = this.velocidad + 1;
//   },
//   frenar(){
//     this.velocidad = this.velocidad - 1;
//   }
// }
// // código de prueba
// console.log(auto.velocidad) // 0
// auto.acelerar()
// console.log(auto.velocidad) // 1
// auto.frenar()
// console.log(auto.velocidad) // 0



// // escribe tu solución acá
// const obtenerImpares = (arreglo)=> {
//   return arreglo.filter(e => e%2==1 )
// }
// // código de prueba
// console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
// console.log(obtenerImpares([64, 35, 27])) // [35, 27]
// console.log(obtenerImpares([])) // []


// escribe tu solución acá
// const max = (...arreglo)=> {
//   let auxiliar = arreglo[0];
//   arreglo.map(valor => {
//     if(auxiliar<valor){
//       auxiliar = valor;
//     }
//   })
//   return auxiliar;
// } 
// // código de prueba
// console.log(max(1, 2, 3, 4)) // 4
// console.log(max(63, 85, 39, 24, 3)) // 85



































