function contar() {
    let inicio = document.getElementById("txti");
    let fim = document.getElementById("txtf");
    let passo = document.getElementById("txtp");
    let resposta = document.getElementById("resposta");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("[ERRO] Preencha os dados!")
    } else{
       resposta.innerHTML = `Contando: `;
       let i = Number(inicio.value); // Converte inicio em valor de número
       let f = Number(fim.value);   // converte fim em valor de número
       let p = Number(passo.value); // Converte passo em valor de número
       
       if(p <= 0) {
        alert("Passos insuficientes, considerando Passos 1")
        p = 1;
       }
       if(i < f){   // Se o valor inicial(i) for maior que o valor do fim(f)
        for(let c = i;c <= f; c += p) { //Contagem crescente
            //c começa pelo inicio(i), enquanto c for menor ou igual ao final(f), ele soma passos(p) ao c
            resposta.innerHTML += `${c} \u{1F449}`;
        }
       } else { //Contagem regressiva
        for(let c = i; c >= f; c -= p){
            resposta.innerHTML += ` ${c} \u{1F449}`;
        }
       }
       resposta.innerHTML += `\u{1F3C1}`;
    }
}