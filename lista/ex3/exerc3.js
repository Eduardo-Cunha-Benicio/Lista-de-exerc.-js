let reajuste = document.querySelector("#reajuste")
let saldo = document.querySelector("#saldo");
let btReajuste = document.querySelector("#btReajuste");

function fazerReajuste(){
    let saldo1 = Number(saldo.value);
    let reajuste1 = (saldo1 / 100) * 101;
    reajuste.textContent = Number (reajuste1);
}

btReajuste.onclick = function(){
    fazerReajuste();
}