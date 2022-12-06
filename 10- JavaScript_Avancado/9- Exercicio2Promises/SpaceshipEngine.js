const SpaceShip = require("./SpaceShip");

module.exports = class SpaceshipEngine extends SpaceShip {
  constructor(name, currentLoad, totalLoad, shield) {
    super(name, currentLoad, totalLoad, shield);
  }

  engineShipPromises() {
    return new Promise((resolve, reject) => {
      if (this.currentLoad > 0) {
        this.currentPercentageLoad = this.percentageLoad();
        resolve(this.currentPercentageLoad);
      } else {
        reject(this.name + " não possui combustível.");
      }
    });
  }

  engineTest() {
    this.engineShipPromises()
      .then((percentage) => {
        if (percentage > 30)
          console.log(`Partida de ${this.name} está autorizada`);
        else
          console.log(
            `Partida de ${this.name} não autorizada. Combistível menor que 30%.`
          );
      })
      .catch((message) => {
        console.log(`A nave ${this.name} não pôde ser ligada: ${message}`);
      });
  }

  testDoubleShield(shield) {
    return new Promise((resolve, reject) => {
      if (shield * 2 > 100) resolve(shield * 2);
      else reject(`Error: double shield ${this.name} = ${shield * 2}`);
    });
  }

  testNormalizationShield(doubleShield) {
    return new Promise((resolve, reject) => {
      if (doubleShield * 0.7 > 120)
        reject(`Error: normalization shield ${this.name} = ${shield * 0.7}`);
      else resolve(doubleShield * 0.7);
    });
  }

  testShield() {
    this.testDoubleShield(this.shield)
      .then((doubleShield) => {
        console.log(`Escudo dobrado ${this.name}: ${doubleShield}`);
        return this.testNormalizationShield(doubleShield);
      })
      .then((normalizationShield) => {
        console.log(`Escudo normalizado ${this.name}: ${normalizationShield}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  engine() {
    let cargaNave = this.engineShipPromises();
    let dobroEscudo = this.testDoubleShield(this.shield);
    let escudoNormalizado = this.testNormalizationShield(this.shield * 2);

    Promise.all([cargaNave, dobroEscudo, escudoNormalizado])
      .then((results) => {
        console.log(this.name + ": " + results);
      })
      .catch((errors) => {
        console.log(errors);
      });
  }
};
