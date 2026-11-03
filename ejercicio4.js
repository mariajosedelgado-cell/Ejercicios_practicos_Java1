let n = 5;
for(let i=1; i <= n; i++){
    let espacios = "";
    let estrellas ="";

    for(let j =1; j <= n - i; j++){
        espacios += " ";
    }

    for(let j = 1; j <= 2 * i - 1; j++){
        estrellas += "*";
    }
    console.log(espacios + estrellas);
}

for(let i = n - 1; i >= 1; i--){
    let espacios ="";
    let estrellas = "";

    for(let j = 1; j <= n - i; j++){
        espacios += " ";
    }
    for(let j = 1; j <= 2 * i - 1; j++){
        estrellas += "*";
    }
    console.log(espacios + estrellas);
}