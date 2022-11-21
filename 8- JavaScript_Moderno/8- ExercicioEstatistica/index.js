// Criando um array aleatório de número de 0 a 10
let seqNumbers = [];

for (let i = 0; i < 10; i++) seqNumbers[i] = Math.floor(Math.random() * 10);

console.log(`Sequência de números: ${seqNumbers}`);

// Calculando média aritmética
function mediaAritmetica(...numbers) {
  let soma = numbers.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return soma / numbers.length;
}

console.log(mediaAritmetica(...seqNumbers));
// O "..." passa um elemento por vez à função

// Calculando a média ponderada
const pesos = [];

for (let i = 0; i < 10; i++) pesos[i] = i + 1;

console.log(`Pesos: ${pesos}`);

function mediaPonderada(...numbers) {
  let dividendo = numbers.reduce(
    (acumulador, valorAtual, indiceAtual) =>
      acumulador + valorAtual * pesos[indiceAtual],
    0
  );

  let divisor = pesos.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return (dividendo / divisor).toFixed(2);
}

console.log(mediaPonderada(...seqNumbers));
