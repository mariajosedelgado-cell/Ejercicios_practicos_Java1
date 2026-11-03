let n = 6;

for (let i = 1; i <= n; i++){
    let linea ="";

    for(let j = 1; j <= i; j++){
        linea += j;
    }
    console.log(linea)
}

for(let i = n - 1; i >= 1; i--){
    let linea = "";

    for(let j = 1; j <= i; j++ ){
        linea +=j;
    }
console.log(linea);
}