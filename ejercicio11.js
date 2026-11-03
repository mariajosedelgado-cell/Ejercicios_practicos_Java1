const prompt = require ("prompt-sync")({sigint:true});

let n = Number(prompt("Ingrese un numero mayor que 6"));

if(n > 6){
    for (let i = 6; i <= n; i += 3){
        console.log(i);
    }
}else{
    console.log("el numero debe ser mayor que 6");
}