function contar() {
  let txt = document.getElementById("txt");
  let msg = document.querySelector("div#msg");
  if (!txt.value) {
    window.alert("[ERRO] Digite nome da cidade!");
  } else {
    // Maringá, Londrina, Pinhais, Chapecó, Joinvile, Blumenau, Florianópolis, Porto Alegre, Gramado
    switch (txt.value) {
      case "Curitiba":
        msg.innerHTML = `${txt.value} pertence ao PR, é capital`;
        break;
      case "Maringá":
        msg.innerHTML = `${txt.value} pertence ao PR, não é capital`;
        break;
      case "Londrina":
        msg.innerHTML = `${txt.value} pertence ao PR, não é capital`;
        break;
      case "Pinhais":
        msg.innerHTML = `${txt.value} pertence ao PR, não é capital`;
        break;
      case "Chapecó":
        msg.innerHTML = `${txt.value} pertence ao SC, não é capital`;
        break;
      case "Joinvile":
        msg.innerHTML = `${txt.value} pertence ao SC, não é capital`;
        break;
      case "Blumenau":
        msg.innerHTML = `${txt.value} pertence ao SC, não é capital`;
        break;
      case "Florianópolis":
        msg.innerHTML = `${txt.value} pertence ao SC,  é capital`;
        break;
      case "Porto Alegre":
        msg.innerHTML = `${txt.value} pertence ao RS,  é capital`;
        break;
      case "Gramado":
        msg.innerHTML = `${txt.value} pertence ao RS, não é capital`;
        break;
      default:
        msg.innerHTML = `${txt.value} cidade invalida! `;
        break;
    }
  }
}
