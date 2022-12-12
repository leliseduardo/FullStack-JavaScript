import React, { Fragment } from "react";
import "./style.css";

function Planet() {
  return (
    <div>
      <h1>Mercúrio</h1>
      <p>Mercúrio é um planeta do sistema solar, que pertence à Via Láctea.</p>
      <img
        class="gray-scale"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
      ></img>
    </div>
  );
}

export default Planet;
