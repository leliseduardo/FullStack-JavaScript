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

export default class Planet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      link: props.link,
      img_url: props.img_url,
      satellites: [],
    };
  }

  async getSatellites() {
    let response = await fetch(
      "http://localhost:3000/api/" + this.state.id + ".json"
    );
    let data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getSatellites().then((data) => {
      this.setState((state) => ({
        satellites: data["satellites"],
      }));
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <DescriptionWithLink
          description={this.state.description}
          link={this.state.link}
        />
        <GrayIMG
          img_url={this.state.img_url}
          grayScale={this.state.grayScale}
        />
        <h3>Satélites do planeta: </h3>
        <ul>
          {this.state.satellites.map((satellite, i) => {
            return <li key={i}>{satellite.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
