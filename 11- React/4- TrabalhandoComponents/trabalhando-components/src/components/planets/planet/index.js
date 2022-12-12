import React, { Fragment } from "react";
import GrayIMG from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";

// Aula eventos como parâmetros
// const Planet = (props) => {
//   return (
//     <div onClick={() => props.clickOnPlanet(props.name)}>
//       <h1>{props.name}</h1>
//       <DescriptionWithLink description={props.description} link={props.link} />
//       <GrayIMG img_url={props.img_url} />
//     </div>
//   );
// };

// Aula sobre renderização condicional
const Planet = (props) => {
  let title;
  if (props.title_with_underline)
    title = (
      <h1>
        <u>{props.name}</u>
      </h1>
    );
  else title = <h1>{props.name}</h1>;

  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayIMG img_url={props.img_url} grayScale={props.grayScale} />
    </div>
  );
};

export default Planet;
