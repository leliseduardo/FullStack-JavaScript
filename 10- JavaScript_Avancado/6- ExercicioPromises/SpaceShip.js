module.exports = class SpaceShip {
  constructor(name, currentLoad, totalLoad) {
    this.name = name;
    this.currentLoad = currentLoad;
    this.totalLoad = totalLoad;
  }

  percentageLoad() {
    this.currentPercentageLoad = (this.currentLoad * 100) / this.totalLoad;

    return this.currentPercentageLoad;
  }
};
