const SpaceshipEngine = require("./SpaceshipEngine");

const sophia = new SpaceshipEngine("Sophia", 0, 10, 70);
const amsterda = new SpaceshipEngine("Amsterdã", 10, 50, 40);
const estrelaAna = new SpaceshipEngine("Estrela-Anã", 4, 20, 80);

// sophia.engineTest();
// amsterda.engineTest();
// estrelaAna.engineTest();

// setTimeout(() => {
//   sophia.testShield();
//   amsterda.testShield();
//   estrelaAna.testShield();
// }, 1000);

setTimeout(() => {
  sophia.engine();
  amsterda.engine();
  estrelaAna.engine();
}, 2000);
