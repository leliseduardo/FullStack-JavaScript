let velocidade = 150;

function pararNave(velocidade, desaceleracao) {
  alert("Iniciando parada da nave.");
  alert("Velocidade atual: " + velocidade);
  while (velocidade > 0) {
    velocidade = desaceleracao(velocidade);
  }
  alert("Nave parada. As comportas podem ser abertas.");
}

pararNave(velocidade, function (velocidade) {
  velocidade -= 20;
  if (velocidade < 0) velocidade = 0;
  alert("Velocidade atual: " + velocidade);
  return velocidade;
});
