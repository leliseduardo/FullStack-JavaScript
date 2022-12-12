import React, { Fragment } from "react";
import GrayIMG from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";

const Planet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayIMG img_url={props.img_url} />
    </div>
  );
};

export default Planet;
