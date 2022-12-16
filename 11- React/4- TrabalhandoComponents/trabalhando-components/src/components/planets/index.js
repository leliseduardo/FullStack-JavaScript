import React, { Fragment, useState } from "react";
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

// // Aula lifecycle
// async function getPlanets() {
//   let response = await fetch("http://localhost:3000/api/planets.json");
//   let data = await response.json();
//   return data;
// }

// // Classes com estado
// class Planets extends React.Component {
//   constructor(props) {
//     super(props);

// Aula estados
//   this.state = {
//     planets: [
//       {
//         name: "Mercúrio",
//         description:
//           "Mercúrio é um planeta do sistema solar, que pertence à Via Láctea.",
//         link: "https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
//         img_url:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg",
//       },
//       {
//         name: "Plutão",
//         description:
//           "Plutão é um planeta anão do sistema solar, que pertence à Via Láctea.",
//         link: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
//         img_url:
//           "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg",
//       },
//     ],
//   };
// }

// Aula lifecycle
//     this.state = {
//       planets: [],
//     };
//   }

//   componentDidMount() {
//     getPlanets().then((data) => {
//       this.setState((state) => ({
//         planets: data["planets"],
//       }));
//     });
//   }

//   removeLast = () => {
//     let new_planets = [...this.state.planets];
//     new_planets.pop();
//     this.setState((state) => ({
//       planets: new_planets,
//     }));
//   };

//   duplicateLastPlanet = () => {
//     let last_planet = this.state.planets[this.state.planets.length - 1];
//     this.setState((state) => ({
//       planets: [...this.state.planets, last_planet],
//     }));
//   };

//   render() {
//     return (
//       <Fragment>
//         <h1>Planet List</h1>
//         <button onClick={this.removeLast}>Remove last</button>
//         <button onClick={this.duplicateLastPlanet}>Duplicate last</button>
//         <hr />
//         {/* <Planet
//           name={this.state.planets[0].name}
//           description={this.state.planets[0].description}
//           link={this.state.planets[0].link}
//           img_url={this.state.planets[0].img_url}
//         />
//         <Planet
//           name={this.state.planets[1].name}
//           description={this.state.planets[1].description}
//           link={this.state.planets[1].link}
//           img_url={this.state.planets[1].img_url}
//         /> */}
//         {/* Outra forma */}
//         {this.state.planets.map((planet, i) => (
//           <Planet
//             key={i}
//             id={planet.id}
//             name={planet.name}
//             description={planet.description}
//             link={planet.link}
//             img_url={planet.img_url}
//           />
//         ))}
//       </Fragment>
//     );
//   }
// }

// export default Planets;

const Planets = () => {
  const [planets, setPlanets] = useState([
    {
      id: "mars",
      name: "Mars",
      description:
        "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      img_url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      link: "https://en.wikipedia.org/wiki/Mars",
    },
  ]);

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.length - 1];
    setPlanets([...planets, last_planet]);
  };

  return (
    <Fragment>
      <h1>Planet List</h1>
      <button onClick={removeLast}>Remove last</button>
      <button onClick={duplicateLastPlanet}>Duplicate last</button>
      <hr />
      {planets.map((planet, i) => (
        <Planet
          key={i}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          link={planet.link}
          img_url={planet.img_url}
        />
      ))}
    </Fragment>
  );
};

export default Planets;
