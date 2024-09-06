/*Por: Joaquin Perez ICINF*/
/*Ejercicio 1*/
const nombre = "Joaquin";
const edad = 21;
const puedoConducir = true;

console.log(nombre,edad,puedoConducir);
console.log(typeof nombre,typeof edad, typeof puedoConducir);

/*Ejercicio 2*/
const numero1 = 20;
const numero2 = 40;
let totalnumero= numero1+numero2;
console.log(totalnumero);
totalnumero=numero1-numero2;
console.log(totalnumero);
totalnumero=numero1*numero2;
console.log(totalnumero);
totalnumero=numero2%numero1;
console.log(totalnumero);

/*Ejercicio 3*/

const numero3 = 15;
const numero4 = 20;
const numero5 = '25';

if  (numero3>=numero4){
    console.log(`El numero ${numero3} es mayor o igual al numero ${numero4}`);
    }else{
        console.log(`El numero ${numero3} es menor o igual al numero ${numero4}`);
    
    }
    if  (numero3<numero4){
        console.log(`El numero ${numero3} es menor al numero ${numero4}`);
        }
    if (numero3<numero5){
        console.log(`El numero ${numero3} es menor al numero ${numero5}`);
            
    }
    
    if  (numero5<numero4){
            console.log(`El numero ${numero5} es menor al numero ${numero4}`);
            }
    if  (numero5!==numero4){
                console.log(`El numero ${numero5} es estrictamente diferente al numero ${numero4}`);
                }
    if  (numero3===numero4){
        console.log(`El numero ${numero3} es estrictamente igual al numero ${numero4}`);
        }

/*Ejercicio 4*/
