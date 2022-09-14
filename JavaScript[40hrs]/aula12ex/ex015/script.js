function verificar() {
   let data = new Date();
   let ano = data.getFullYear();    // Ano atual
   let formularioAno = document.getElementById("txtano");
   let resposta = document.querySelector("div#resposta");
   if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) { // Validação de dados
    window.alert("[ERRO] Verifique os dados e tente novamente!")
   } else {
    let fsex = document.getElementsByName("rdosexo");
    let idade = ano - Number(formularioAno.value);
    //resposta.innerHTML = `Idade calculada ${idade}`;
    let genero = "";
    let img = document.createElement("img");   // Cria uma tag "img"
    img.setAttribute("id", "foto");
    if(fsex[0].checked) {
        genero = "Homem";
        if(idade >= 0 && idade < 14){
            img.setAttribute("src", "criancaM.png");  //criança
        } else if(idade < 21) {
            img.setAttribute("src", "jovemM.png");  //jovem
        } else if(idade < 50) {
            img.setAttribute("src", "adultoM.png");  // Adulto
        } else {
            img.setAttribute("src", "idosoM.png");  //idoso
        }
    } else if(fsex[1].checked){
        genero = "Mulher";
        if(idade >= 0 && idade < 14){
            img.setAttribute("src", "criancaF.png");  //criança
        } else if(idade < 21) {
            img.setAttribute("src", "jovemF.png");  //jovem
        } else if(idade < 50) {
            img.setAttribute("src", "adultoF.png"); // Adulto
        } else {
            img.setAttribute("src", "idosoF.png");  //idoso
        }
    }
    resposta.style.textAlign = "center";    // Alinha a resposta ao centro do body
    resposta.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    resposta.appendChild(img);
   }
}