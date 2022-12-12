import React, { Fragment } from "react";
import Planet from "./planet";

function Planets() {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <hr />
      <Planet
        name="Mercúrio"
        description="Mercúrio é um planeta do sistema solar, que pertence à Via Láctea."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
      />
      <Planet
        name="Plutão"
        description="Plutão é um planeta anão do sistema solar, que pertence à Via Láctea."
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
      />
    </Fragment>
  );
}

export default Planets;
