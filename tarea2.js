/*Por: Joaquin Perez ICINF*/
/*Ejercicio 1*/
const nombre = "Joaquin";
const edad = 21;
const puedoConducir = true;

console.log(nombre,edad,puedoConducir);
console.log(typeof nombre,typeof edad, typeof puedoConducir);

/*Ejercicio 2*/
let numero1 = 20;
let numero2 = 40;
let totalnumero= numero1+numero2;
console.log(totalnumero);
totalnumero=numero1-numero2;
console.log(totalnumero);
totalnumero=numero1*numero2;
console.log(totalnumero);
totalnumero=numero2%numero1;
console.log(totalnumero);

/*Ejercicio 3*/

numero1 = 15;
numero2 = 20;
let numero3 = '25';

if  (numero1>=numero2){
    console.log(`El numero ${numero1} es mayor o igual al numero ${numero2}`);
    }else{
        console.log(`El numero ${numero1} es menor o igual al numero ${numero2}`);
    
    }
    if  (numero1<numero2){
        console.log(`El numero ${numero1} es menor al numero ${numero2}`);
        }
    if (numero1<numero3){
        console.log(`El numero ${numero1} es menor al numero ${numero3}`);
            
    }
    
    if  (numero3<numero2){
            console.log(`El numero ${numero3} es menor al numero ${numero2}`);
            }
    if  (numero3!==numero1){
                console.log(`El numero ${numero3} es estrictamente diferente al numero ${numero1}`);
                }
    if  (numero1===numero2){
        console.log(`El numero ${numero1} es estrictamente igual al numero ${numero2}`);
        }

/*Ejercicio 4*/

numero1= 10;
numero2=20;
numero3=30;
let mayor= Math.max(numero1,numero2,numero3);
console.log(mayor);

let menor= Math.min(numero1,numero2,numero3);
console.log(menor);

if(numero1%2===0){
console.log (`el numero ${numero1} es par`);
}else{
console.log(`el numero ${numero1} es impar` );
}

if(numero2%2===0){
    console.log (`el numero ${numero2} es par`);
    }else {
    console.log(`el numero ${numero2} es impar` );
    }
    if(numero3%2===0){
        console.log (`el numero ${numero3} es par`);
        }else{
        console.log(`el numero ${numero3} es impar` );
        }

        if(numero1%5===0){
            console.log (`el numero ${numero1} es multiplo de 5`);
        }
        if(numero2%5===0){
            console.log (`el numero ${numero2} es multiplo de 5`);
        }
        if(numero3%5===0){
            console.log (`el numero ${numero2} es multiplo de 5`);
        }
/*Ejercio 5 */

for(let i=0;i<11; i++){
    console.log(i)
}

for(let i=10;i>0; i--){
    console.log(i)
}
