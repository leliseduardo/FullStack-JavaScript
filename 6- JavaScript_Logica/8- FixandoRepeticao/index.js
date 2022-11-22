const nave = prompt("Escreva o noma da nave:");
let novaNave = "";

for (let i = nave.length - 1; i >= 0; i--) {
  if (nave[i] != "e") novaNave += nave[i];
  else break;
}

alert("Nome original: " + nave + "\nNome processado: " + novaNave);
