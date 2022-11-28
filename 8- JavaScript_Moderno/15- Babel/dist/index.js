"use strict";

// Criando um array aleatório de número de 0 a 10
// let seqNumbers = [1, 1, 1, 5, 6, 2, 2, 3, 3, 4];
var seqNumbers = [];
for (var i = 0; i < 10; i++) {
  seqNumbers[i] = Math.floor(Math.random() * 10);
}
console.log("Sequ\xEAncia de n\xFAmeros: ".concat(seqNumbers));

// Calculando média aritmética
function mediaAritmetica() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var soma = numbers.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0);
  return soma / numbers.length;
}
console.log("M\xE9dia aritm\xE9tica: ".concat(mediaAritmetica.apply(void 0, seqNumbers)));
// O "..." passa um elemento por vez à função

// Calculando a média ponderada
var pesos = [];
for (var _i = 0; _i < 10; _i++) {
  pesos[_i] = _i + 1;
}
console.log("Pesos: ".concat(pesos));
function mediaPonderada() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var dividendo = numbers.reduce(function (acumulador, valorAtual, indiceAtual) {
    return acumulador + valorAtual * pesos[indiceAtual];
  }, 0);
  var divisor = pesos.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual;
  }, 0);
  return (dividendo / divisor).toFixed(2);
}
console.log("M\xE9dia ponderada: ".concat(mediaPonderada.apply(void 0, seqNumbers)));

// Calculando a mediana
function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  console.log("Sequ\xEAncia ordenada: ".concat(numbers));
  if (numbers.length % 2 === 1) return numbers[Math.floor(numbers.length / 2)];
  if (numbers.length % 2 === 0) {
    var indice = numbers.length / 2;
    var num1 = numbers[indice];
    var num2 = numbers[indice - 1];
    var _mediana = (num1 + num2) / 2;
    return _mediana;
  }
}
console.log("Mediana: ".concat(mediana.apply(void 0, seqNumbers)));

// Calculando a moda - Fixando exercício
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quant = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quant.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quant[0][0];
};
console.log("Moda: ".concat(mode.apply(void 0, seqNumbers)));

// Calculando a moda
function moda() {
  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    numbers[_key5] = arguments[_key5];
  }
  // [ [n, qtd], [n, qtd], [n, qtd]]
  var freqs = numbers.map(function (number) {
    return [number, numbers.filter(function (num) {
      return num === number;
    }).length];
  });
  var numModa = freqs.sort(function (a, b) {
    return b[1] - a[1];
  });
  return numModa[0][0];
}
console.log("Moda: ".concat(moda.apply(void 0, seqNumbers)));