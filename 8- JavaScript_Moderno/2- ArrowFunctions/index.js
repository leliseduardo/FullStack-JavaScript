// Funções tradicionais
function somaNormal(a, b) {
  return a + b;
}
console.log(`Soma normal: ${somaNormal(2, 2)}`);

// Função anônima
const somaAnonima = function (a, b) {
  return a + b;
};
console.log(`Soma anonima: ${somaAnonima(3, 3)}`);

// Arrow functions
const somaArrow = (a, b) => {
  return a + b;
};
console.log(`Soma Arrow: ${somaArrow(4, 4)}`);

const somaArrowSimples = (a, b) => a + b;
console.log(`Soma Arrow Simples: ${somaArrowSimples(5, 5)}`);

const dobroArrow = (n) => `O dobro de ${n} é ${2 * n}`;
console.log(`Dobro Arrow: ${dobroArrow(6)}`);

// High order functions
const towns = ["Prontera", "Izlude", "Payon", "Alberta", "Geffen", "Morroc"];

const highOrderNormal = towns.filter(function (item) {
  return item[0] === "P";
});
console.log(`High Order Functions normal: ${highOrderNormal}`);

const highOrderArrow = towns.filter((item) => item[0] === "P");
console.log(`High Order Functions Arrow: ${highOrderArrow}`);
console.log(highOrderArrow);
