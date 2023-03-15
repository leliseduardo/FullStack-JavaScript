const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

Planet.hasOne(Satelite, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Satelite.belongsTo(Planet, { foreingKey: "planetId", as: "planets" });

module.exports = { Planet, Satelite };
