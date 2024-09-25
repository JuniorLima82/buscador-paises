async function consultarPaises(){
    var resposta = await fetch("https://restcountries.com/v3.1/all");
    var dados = await resposta.json();

    console.log(dados);

}

function mostrarPaises(){}

consultarPaises()