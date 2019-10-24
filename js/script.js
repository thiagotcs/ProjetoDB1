function ePrimo(numero) {
  if (numero !== 1) {
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        return "não é primo";
      }
    }
    return "é primo";
  }
  return "não é primo";
}

function contar() {
  let txtnum = document.getElementById("txtnum");
  let msn = document.querySelector("div#msg");
  if (!txtnum.value) {
    return window.alert("[ERRO] Digite um valor!!!");
  }
  let num = Number(txtnum.value);
  let ePar = num % 2 === 0 ? "é PAR" : "é ÍMPAR";
  let eMaiorQue10 = num > 10 ? "é maior que 10" : "não é maior que 10";
  let dobro = num * 2;
  let primo = ePrimo(num);

  return (msn.innerHTML = `O número ${num} ${ePar} o dobro é ${dobro}, ${eMaiorQue10}, ${primo}`);
}
