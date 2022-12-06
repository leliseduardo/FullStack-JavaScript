const SpaceshipEngine = require("./SpaceshipEngine");

const sophia = new SpaceshipEngine("Sophia", 0, 10);
const amsterda = new SpaceshipEngine("Amsterdã", 10, 14);
const estrelaAna = new SpaceshipEngine("Estrela-Anã", 4, 20);

function partida(ship) {
  ship
    .engineShip()
    .then((percentage) => {
      if (percentage > 30)
        console.log(`Partida de ${ship.name} está autorizada`);
      else
        console.log(
          `Partida de ${ship.name} não autorizada. Combistível menor que 30%.`
        );
    })
    .catch((message) => {
      console.log(`A nave ${ship.name} não pôde ser ligada: ${message}`);
    });
}

partida(sophia);
partida(amsterda);
partida(estrelaAna);
