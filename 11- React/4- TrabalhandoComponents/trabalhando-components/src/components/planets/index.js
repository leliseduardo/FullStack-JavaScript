import React, { Fragment } from "react";
import Planet from "./planet";

// const showMessage = () => {
//   console.log("Hello Event!");
// };

// const clickOnPlanet = (name) => {
//   console.log(`Clicou no planeta ${name}`);
// };

// Renderização condicional
// const Planets = () => {
//   return (
//     <Fragment>
//       <h3>Planet List</h3>
//       {/* <button onClick={showMessage}>Message</button> */}
//       <hr />
//       <Planet
//         name="Mercúrio"
//         description="Mercúrio é um planeta do sistema solar, que pertence à Via Láctea."
//         link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
//         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
//         // clickOnPlanet={clickOnPlanet}
//         title_with_underline={false}
//         grayScale={true}
//       />
//       <Planet
//         name="Plutão"
//         // description="Plutão é um planeta anão do sistema solar, que pertence à Via Láctea."
//         link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
//         img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
//         // clickOnPlanet={clickOnPlanet}
//         title_with_underline={true}
//         grayScale={false}
//       />
//     </Fragment>
//   );
// };

// Classes com estado
class Planets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [
        {
          name: "Mercúrio",
          description:
            "Mercúrio é um planeta do sistema solar, que pertence à Via Láctea.",
          link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
        },
        {
          name: "Plutão",
          description:
            "Plutão é um planeta anão do sistema solar, que pertence à Via Láctea.",
          link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
          img_url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
        },
      ],
    };
  }

  removeLast = () => {
    let new_planets = [...this.state.planets];
    new_planets.pop();
    this.setState((state) => ({
      planets: new_planets,
    }));
  };

  duplicateLastPlanet = () => {
    let last_planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, last_planet],
    }));
  };

  render() {
    return (
      <Fragment>
        <h3>Planet List</h3>
        <button onClick={this.removeLast}>Remove last</button>
        <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
        <hr />
        {/* <Planet
          name={this.state.planets[0].name}
          description={this.state.planets[0].description}
          link={this.state.planets[0].link}
          img_url={this.state.planets[0].img_url}
        />
        <Planet
          name={this.state.planets[1].name}
          description={this.state.planets[1].description}
          link={this.state.planets[1].link}
          img_url={this.state.planets[1].img_url}
        /> */}
        {/* Outra forma */}
        {this.state.planets.map((planet, i) => (
          <Planet
            key={i}
            name={planet.name}
            description={planet.description}
            link={planet.link}
            img_url={planet.img_url}
          />
        ))}
      </Fragment>
    );
  }
}

export default Planets;
