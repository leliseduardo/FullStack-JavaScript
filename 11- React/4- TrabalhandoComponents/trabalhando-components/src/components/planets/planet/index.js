import React, { Fragment, useState, useEffect } from "react";
import GrayIMG from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description-with-link";
import Planets from "..";
import Form from "./form";

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
// const Planet = (props) => {
//   let names = ["a", "b", "c", "d"];
//   // let satellites = names.map((n, i) => <li key={i}>Satélite {n}</li>);
//   // satellites será um array formado pelo processamento de cada elemento.
//   // Nesse caso, será formado por elementos "li" com o nome de cada elemento

//   let title;
//   if (props.title_with_underline)
//     title = (
//       <h1>
//         <u>{props.name}</u>
//       </h1>
//     );
//   else title = <h1>{props.name}</h1>;

//   return (
//     <div>
//       {title}
//       <DescriptionWithLink description={props.description} link={props.link} />
//       <h3>Satélites</h3>
//       {/* <ul>{satellites}</ul> */}
//       <ul>
//         {names.map((n, i) => (
//           <li key={i}>Satélite {n}</li>
//         ))}
//       </ul>
//       <GrayIMG img_url={props.img_url} grayScale={props.grayScale} />
//     </div>
//   );
// };

// Criando classe com estado
// const Planet = (props) => {
//   let title;
//   if (props.title_with_underline)
//     title = (
//       <h1>
//         <u>{props.name}</u>
//       </h1>
//     );
//   else title = <h1>{props.name}</h1>;

//   return (
//     <div>
//       {title}
//       <DescriptionWithLink description={props.description} link={props.link} />
//       <GrayIMG img_url={props.img_url} grayScale={props.grayScale} />
//     </div>
//   );
// };

// export default Planet;

// Exercício state lifecycle

//

// Exercício refatoração de state e lifestyle com hooks
// const Planet = (props) => {
//   async function getSatellites() {
//     let response = await fetch(
//       "http://localhost:3000/api/" + props.id + ".json"
//     );
//     let data = await response.json();
//     return data;
//   }

//   const [satellites, setSatellites] = useState([]);

//   useEffect(() => {
//     getSatellites().then((data) => {
//       setSatellites(data["satellites"]);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <DescriptionWithLink description={props.description} link={props.link} />
//       <GrayIMG img_url={props.img_url} />
//       <h3>Satélites do planeta: </h3>
//       <ul>
//         {satellites.map((satellite, i) => {
//           return <li key={i}>{satellite.name}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Planet;

const Planet = (props) => {
  async function getSatellites() {
    let response = await fetch(
      "http://localhost:3000/api/" + props.id + ".json"
    );
    let data = await response.json();
    return data;
  }

  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites().then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  const addSatellites = (newSatellite) => {
    setSatellites([...satellites, newSatellite]);
  };

  return (
    <div>
      <h2>{props.name}</h2>
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayIMG img_url={props.img_url} />
      <h3>Adicionar satélites:</h3>
      <hr />
      <Form addSatellite={addSatellites} />
      <h3>Satélites do planeta: </h3>
      <ul>
        {satellites.map((satellite, i) => {
          return <li key={i}>{satellite.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Planet;
