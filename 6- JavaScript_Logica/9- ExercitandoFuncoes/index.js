let velocidade = 0;
const nome = prompt("Digite o nome da nave");
let opcao;

function acelerar() {
  velocidade += 5;
  return velocidade;
}

function desacelerar() {
  if (velocidade > 5) velocidade -= 5;
  else velocidade = 0;

  return velocidade;
}

function imprimir() {
  alert("Nome da nave: " + nome + "\nVelocidade: " + velocidade);
}

function menu() {
  while (opcao != "sair") {
    opcao = prompt(
      "Escolha uma opcao: " +
        "\n1- Acelerar 5km/h" +
        "\n2- Desacelerar 5km/h" +
        "\n3- Imprimir dados" +
        "\n4- Sair do programa"
    );

    switch (opcao) {
      case "1":
        acelerar();
        break;
      case "2":
        desacelerar();
        break;
      case "3":
        imprimir();
        break;
      case "4":
        opcao = "sair";
        break;
      default:
        opcao = "menu";
    }
  }
}

menu();
