/*EXERCÍCIO 2
Faça uma página que receba um valor que é o valor pago, um segundo valor que é o preço do produto e retorne o troco a ser dado
document.querySelector é uma atribuição para a variável*/

let dinheiro = document.querySelector("#dinheiro");
let produto = document.querySelector("#produto");
let btTroco = document.querySelector("#btTroco");
let resultado = document.querySelector("#h3Resultado");

function retornarTroco (){
    let dinheiro1 = Number(dinheiro.value);
    let produto1 = Number (produto.value);
    let resultado1 = dinheiro1 - produto1;
    h3Resultado.textContent = String(resultado1);
}

btTroco.onclick = function(){
    retornarTroco();
}