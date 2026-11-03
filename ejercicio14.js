const prompt = require ("prompt-sync")({sigint:true});

let m = Number(prompt("Ingrese el numero de las filas:"));
let n = Number(prompt("Ingrese el numero de columnas:"));
let caracter = prompt("Ingrese un caracter:");

for(let i = 1; i <= m; i++){
    let linea ="";

    for(let j = 1; j <= n; j++){
        linea += caracter;
    }
    console.log(linea);
}