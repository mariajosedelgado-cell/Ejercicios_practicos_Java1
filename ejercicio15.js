let n =5;
for(let i = 1; i <= 2 * n - 1; i++){
    let nivel;

    if (i <= n){
        nivel = i;
    }else{
        nivel = 2 * n - i;
    }
    let linea ="";
    for(let j = 1; j <= n - nivel; j++){
        linea += " ";
    }
    for(let j = 1; j <= 2 * nivel - 1; j++){
        linea += "*";
    }
    console.log(linea);
}