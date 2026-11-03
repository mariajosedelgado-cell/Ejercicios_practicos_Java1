const prompt = require ("prompt-sync")({sigint:true});

let n = Number(prompt("Ingrese un numero"));

for(let i = 1; i<= n; i++){
    let linea ="";


for(let j = 1; j <= i; j++){
    linea += j;
}
console.log(linea);
}