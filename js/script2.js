function contar() {
  let txt = document.getElementById("txt");
  let msg = document.querySelector("div#msg");
  if (!txt.value) {
    return window.alert("[ERRO] Digite um Texto!!!");
  }
  var vogais = ["a", "e", "i", "o", "u"];
  let string = txt.value.split("");
  let qtdCaracteres = 0;
  var qtdEspacos = 0;
  var qtdVogais = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      qtdEspacos++;
    }
    if (vogais.includes(string[i].toLowerCase())) {
      qtdVogais++;
    }
    if (string[i] !== " ") {
      qtdCaracteres++;
    }
  }
  msg.innerHTML = `${qtdCaracteres} caracteres, ${qtdEspacos} espaços em branco, ${qtdVogais} vogais`;
}
