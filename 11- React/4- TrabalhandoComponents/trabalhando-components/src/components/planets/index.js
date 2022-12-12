import React, { Fragment } from "react";
import Planet from "./planet";

// const showMessage = () => {
//   console.log("Hello Event!");
// };

const clickOnPlanet = (name) => {
  console.log(`Clicou no planeta ${name}`);
};

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      {/* <button onClick={showMessage}>Message</button> */}
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é um planeta do sistema solar, que pertence à Via Láctea."
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
        clickOnPlanet={clickOnPlanet}
      />
      <Planet
        name="Plutão"
        description="Plutão é um planeta anão do sistema solar, que pertence à Via Láctea."
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
        clickOnPlanet={clickOnPlanet}
      />
    </Fragment>
  );
};

export default Planets;
