// Criando um array aleatório de número de 0 a 10
let seqNumbers = [];

for (let i = 0; i < 10; i++) seqNumbers[i] = Math.floor(Math.random() * 10);

console.log(seqNumbers);

// Calculando média aritmética
function mediaAritmetica(...numbers) {
  let soma = numbers.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return soma / numbers.length;
}

console.log(mediaAritmetica(...seqNumbers)); // O "..." passa um elemento por vez à função
