// Criando tipo de objetos
// type Planet = {
//   name: string;
//   satellites: string[];
// };
let sun;
sun.name = "Sol";
sun.mass = 1.989 * Math.pow(10, 30);
sun.age = 4.503 * Math.pow(10, 9);
sun.planets = [];
class MilkWayPlanet {
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
        //...
    }
}
