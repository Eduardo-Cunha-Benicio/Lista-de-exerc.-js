let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btMaior = document.querySelector("#btMaior");
let h2Resultado = document.querySelector("#h2Resultado");

function retornarMaior(){
    let vlr1 = Number (valor1.value);
    let vlr2 = Number (valor2.value);
    if (vlr1 > vlr2){
        alert (Number(vlr1));
    } else {
        alert (Number (vlr2));
    }
}

btMaior.onclick = function(){
    retornarMaior();
}