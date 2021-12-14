//                   DIA 9

//EJERCICIO46
//Crea una función flecha y asígnala a una variable llamada hola. La función debe recibir un argumento name (con valor por defecto "Pedro") y debe retornar la frase "Hola " seguido del nombre y un signo de exclamación.
// Nota: Utiliza plantillas de strings para la creación de la frase.

// escribe acá tu función flecha
const hola = (nombre="Pedro")=> {
  return `Hola ${nombre}!`
}
// código de prueba
console.log(hola()) // "Hola Pedro!"
console.log(hola("Maria")) // "Hola Maria!"

//EJERCICIO47
//Utiliza destructuración para almacenar los primeros dos elementos del siguiente arreglo en las variables first y second:

const arr = [1, 2, 3, 4]
// escribe acá tu respuesta
const [first,second] = arr;
// código de prueba
console.log(first) // 1
console.log(second) // 2

//Utiliza ahora destructuración para obtener el valor de las llaves name y age del objeto:
const person = {
  name: "Pedro",
  age: 20
}
// escribe tu respuesta acá
const {name,age}= person;
// código de prueba
console.log(name) // "Pedro"
console.log(age)

//EJERCICIO48
//Crea un objeto literal en una variable llamada auto que tenga un atributo velocidad (con valor inicial 0) y dos métodos acelerar y frenar. Los métodos acelerar y frenar deben incrementar y decrementar la propiedad velocidad en 1.

// escribe tu solución acá
const auto = {
  velocidad : 0,
  acelerar(){
    this.velocidad = this.velocidad + 1;
  },
  frenar(){
    this.velocidad = this.velocidad - 1;
  }
}
// código de prueba
console.log(auto.velocidad) // 0
auto.acelerar()
console.log(auto.velocidad) // 1
auto.frenar()
console.log(auto.velocidad) // 0

//EJERCICIO49
//Crea una función flecha y asígnala a una variable obtenerImpares. La función debe recibir un arreglo de números y retornar todos los impares.
// Nota: Utiliza el método filter y pásale una función flecha como argumento.

const obtenerImpares = (arreglo)=> {
  return arreglo.filter(e => e%2==1 )
}
// código de prueba
console.log(obtenerImpares([1, 2, 3, 4, 5])) // [1, 3, 5]
console.log(obtenerImpares([64, 35, 27])) // [35, 27]
console.log(obtenerImpares([])) // []

//EJERCICIO50
//Crea una función llamada max (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.
// Nota: No utilices el método Math.max de JavaScript.

// escribe tu solución acá
const max = (arreglo)=> {
  let auxiliar = arreglo[0];
  arreglo.map(valor => {
    if(auxiliar<valor){
      auxiliar = valor;
    }
  })
  return auxiliar;
} 
// código de prueba
console.log(max([1, 2, 3, 4])) // 4
console.log(max([63, 85, 39, 24, 3])) // 85

//EJERCICIO51
//Modifica el ejercicio anterior para que la función max no reciba un arreglo sino un número indeterminado de argumentos.

// escribe tu solución acá
const max = (...arreglo)=> {
  let auxiliar = arreglo[0];
  arreglo.map(valor => {
    if(auxiliar<valor){
      auxiliar = valor;
    }
  })
  return auxiliar;
} 
// código de prueba
console.log(max(1, 2, 3, 4)) // 4
console.log(max(63, 85, 39, 24, 3)) // 85




