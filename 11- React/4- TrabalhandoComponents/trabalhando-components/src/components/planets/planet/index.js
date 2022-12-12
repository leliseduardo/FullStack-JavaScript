import React, { Fragment } from "react";
import GrayIMG from "../../shared/gray-img";

function Planet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <GrayIMG img_url={props.img_url} />
    </div>
  );
}

export default Planet;
