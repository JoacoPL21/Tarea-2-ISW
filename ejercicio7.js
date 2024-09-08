
let numeros =[1,2,3,4,5,6,7,8];

let suma = numeros.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

console.log(suma);

//promedio de un Array
let promedio = suma/numeros.length;
console.log(promedio);

//mayusculas de un Array
const palabras=['casa','azul','naranja'];
function mayuscula (palabra){
    return palabra.toUpperCase();
    }
respuesta= palabras.map(mayuscula)
console.log(respuesta);

//numeros pares de un Array
let pares = numeros.filter(function(element) {
    return element % 2 === 0;
  });
  console.log(pares);
  