// Função com parâmetro rest (rest params). O rest params tem que ser ó último
// parâmetro
function sum(paramExemplo, ...numbers) {
  paramExemplo = 0; // Não serve para nada, só para mostrar o rest params por último
  return numbers.reduce((accum, num) => accum + num, 0);
  // numbers.reduce(function(accum, num){ return accum + num}, 0)
  // O códigos acima fazem a mesma coisa
}

console.log(sum(2, 2));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
console.log(sum(234, 234, 566, 345, 664, 33, 22));
