let velocidade = 0;

const nome = prompt("Qual seu nome?");
const velocidadeDesejada = prompt("A qual velocidade você deseja estar?");
const confirmacaoVelocidade = confirm(
  "Confirma a velocidade desejada? \n Velocidade: " + velocidadeDesejada
);

if (confirmacaoVelocidade) velocidade = velocidadeDesejada;

if (velocidade <= 0)
  alert("Nave está parada. Considere partir e aumentar a velocidade.");
else if (velocidade < 40)
  alert("Você está devagar, considere aumentar a velocidade.");
else if (velocidade >= 40 && velocidade < 80)
  alert("Parece uma boa velocidade para manter.");
else if (velocidade >= 80 && velocidade < 100)
  alert("Velocidade alta. Considere diminuir.");
else if (velocidade >= 100)
  alert("Valocidade perigosa. Controle automárico forçado.");

alert("Nome piloto: " + nome + "\nVelocidade atual: " + velocidade);
