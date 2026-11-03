const prompt = require ("prompt-sync")({sigint:true});


let n = Number(prompt("Ingrese un numero entero" ));
let factorial = 1;

if(Number.isInteger(n) && n >= 0){
    for(let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    console.log("el factorial es: " + factorial);
}else{
    console.log("Ingrese un entero no negativo");
}