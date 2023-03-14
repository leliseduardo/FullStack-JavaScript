(async () => {
  const Planet = require("./models/Planet");

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
  const updatePlanets = await Planet.findByPk(4);
  updatePlanets.name = "Jupter";
  await updatePlanets.save();

  // console.log(newPlanet);
  // console.log(seePlanets);
  console.log(updatePlanets);
})();
