function addEscalacao() {
  const listaJogadores = document.getElementById("jogadores-list");
  const inputsJogadores = document.getElementById("inputs-jogadores");
  const aviso = document.createElement("p");
  aviso.id = "aviso";

  if (
    document.getElementById("posicao").value != "" &&
    document.getElementById("nome").value != "" &&
    document.getElementById("numero").value != ""
  ) {
    const ul = document.createElement("ul");
    if (document.getElementById("aviso"))
      inputsJogadores.removeChild(document.getElementById("aviso"));

    const posicaoLi = document.createElement("li");
    posicaoLi.innerText =
      "Posição: " + document.getElementById("posicao").value;
    ul.appendChild(posicaoLi);

    const nomeLi = document.createElement("li");
    nomeLi.innerText = "Nome: " + document.getElementById("nome").value;
    ul.appendChild(nomeLi);

    const numeroLi = document.createElement("li");
    numeroLi.innerText = "Número: " + document.getElementById("numero").value;
    numeroLi.id = "numeroLi";
    ul.appendChild(numeroLi);

    listaJogadores.appendChild(ul);

    document.getElementById("posicao").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("numero").value = "";
  } else {
    aviso.innerText = "Preencher todos os campos";
    inputsJogadores.appendChild(aviso);
  }
}

function removerJogador() {}
