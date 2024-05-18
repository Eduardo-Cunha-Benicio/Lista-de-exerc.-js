let ipNumero1 = document.querySelector("#ipNumero1");
let ipNumero2 = document.querySelector("#ipNumero2");
let ipNumero3 = document.querySelector("#ipNumero3");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function Calcular (){
    let vlr1 = Number (ipNumero1.value);
    let vlr2 = Number (ipNumero2.value);
    let vlr3 = Number (ipNumero3.value);

    //Média aritmética//
    let mediaAritmetica = (vlr1+vlr2+vlr3) / 3;

    //média ponderada//
    let = somaValoresPesos = (vlr1 * 3) + (vlr2 * 2) + (vlr3 * 5);
    let somaPesos = 3 + 2 + 5;
    let mediaPonderada = somaValoresPesos / somaPesos;

    //soma das médias
    let somaMedias = Number (mediaAritmetica + mediaPonderada);

    //média das médias
    let mediaMedias = somaMedias / 2;

    h2Resultado.innerHTML ="Aritmética: " +mediaAritmetica+ "<br>" + "Ponderada: " +mediaPonderada+ "<br>" + "Soma das médias: " +somaMedias+ "<br>" + "Média das duas médias: " +mediaMedias;
}
btCalcular.onclick = function(){
    Calcular();
}