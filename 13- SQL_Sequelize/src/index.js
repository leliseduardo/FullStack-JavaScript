// Aulas de API
const express = require("express");
const routes = require("./routes");

require("../config/associations");

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3000);

// Aulas do sequelize
// (async () => {
//   const Planet = require("../models/Planet");

// Adicionando
// const newPlanet = await Planet.create({
//   name: "Venus",
//   position: 5,
// });

// Pesquisando
// const seePlanets = await Planet.findAll();
// const seePlanets = await Planet.findByPk(1);
// const seePlanets = await Planet.findAll({
//   where: {
//     name: "Terra",
//   },
// });

// Atualizando
// const updatePlanets = await Planet.findByPk(4);
// updatePlanets.name = "Jupiter";
// await updatePlanets.save();

// Removendo
// const deletePlanets = await Planet.findByPk(2);
// console.log(deletePlanets);
// await deletePlanets.destroy();

// console.log(newPlanet);
// console.log(seePlanets);
// console.log(updatePlanets);
// console.log(deletePlanets);
// })();
