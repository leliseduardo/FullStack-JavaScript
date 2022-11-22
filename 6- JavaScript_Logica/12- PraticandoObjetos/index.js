let velocidade = 0;
let opcao = "";
let nave = {};

nave.nome = prompt("Digite o nome da nave: ");
nave.tipo = prompt("Digite o tipo da nave:");
nave.velMax = prompt("Digite a velocidade máxima da nave:");

while (opcao != "parar") {
  opcao = prompt("Acelerar o parar a nave?");

  if (opcao == "parar") {
    alert("Velocidade em que estava: " + velocidade);
  } else if (opcao == "acelerar") {
    vel = prompt("Digite a velocidade que se quer:");
    if (velocidade > nave.velMax) alert("Velocidade não permitida.");
    else velocidade = vel;
  }
}
