/*Ejercio 5 */

//Del 1 al 10
for(let i=0;i<11; i++){
    console.log(i)
}
//Del 10 al 1
for(let i=10;i>0; i--){
    console.log(i)
}
//Pares del 10 al 1
for(let i=0;i<11; i++){
    if (i%2===0)
    console.log(i)
}
//Imapres del 10 al 1
for(let i=0;i<11; i++){
    if (i%2!==0)
    console.log(i)
}
//Multiplos de 3
for(let i=0;i<11; i++){
    if (i%3===0)
    console.log(i)

}
//Multiplos de 5
for(let i=0;i<11; i++){
    if (i%5===0)
    console.log(i)

}
//Múltiplos de 3 y 5.
for(let i=0;i<11; i++){
    if (i%3===0&&i%5===0)
    console.log(i)

}
//Múltiplos de 3 o 5
for(let i=0;i<11; i++){
    if (i%3===0||i%5===0)
    console.log(i)

}