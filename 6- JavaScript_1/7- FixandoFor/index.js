let nome = prompt("Digite o nome da nave:");
let caracter = prompt("Qual caracter deseja substituir?");
let substituir = prompt("Por qual caracter deseja substituir?");

let novoNome = "";

for (let i = 0; i < nome.length; i++) {
  if (nome[i] == caracter) novoNome += substituir;
  else novoNome += nome[i];
}

alert("Nome da nave: " + novoNome);
