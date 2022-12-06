const SpaceShip = require("./SpaceShip");

module.exports = class SpaceshipEngine extends SpaceShip {
  constructor(name, currentLoad, totalLoad) {
    super(name, currentLoad, totalLoad);
  }

  engineShip() {
    return new Promise((resolve, reject) => {
      if (this.currentLoad > 0) {
        this.currentPercentageLoad = this.percentageLoad();
        resolve(this.currentPercentageLoad);
      } else {
        reject("Não possui combustível.");
      }
    });
  }
};
