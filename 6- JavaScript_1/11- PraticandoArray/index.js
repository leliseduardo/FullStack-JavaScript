const navesEngatadas = [
  ["Fênix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];

// // Primeiro item
let tripulantes = navesEngatadas.filter(function (nave) {
  return nave[1] > 9;
});

tripulantes.forEach(function (nave) {
  alert("Naves com mais de 9 tripulantes: " + nave);
});

// Segundo item
let plataforma =
  navesEngatadas.findIndex(function (nave) {
    return nave[2] == false;
  }) + 1;

alert("Indice da primeira nave não engatada: " + plataforma);

// Terceiro item
let maiusculas = navesEngatadas.slice();

maiusculas.forEach(function (nave) {
  nave[0] = nave[0].toUpperCase();
  alert("Nave com nome maiusculo: " + nave[0]);
});
