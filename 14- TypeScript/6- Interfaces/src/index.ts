// Criando tipo de objetos
// type Planet = {
//   name: string;
//   satellites: string[];
// };

// Criando interface
interface CelestrialBody {
  name: string;
  mass: number;
}

interface Star extends CelestrialBody {
  age: number;
  planets: Planet[];
}

interface Planet extends CelestrialBody {
  population: number;
  createSatellite: (name: string) => void;
}

type Asteroid = CelestrialBody & {
  size: number;
};

let sun: Star;

sun.name = "Sol";
sun.mass = 1.989 * 10 ** 30;
sun.age = 4.503 * 10 ** 9;
sun.planets = [];

class MilkWayPlanet implements Planet {
  name: string;
  mass: number;
  population: number;

  constructor(name: string, mass: number, population: number) {
    this.name = name;
    this.mass = mass;
    this.population = population;
  }

  createSatellite(name: string) {
    //...
  }
}

// Pode-se reescrever a interface, adicionando atributos
interface Planet {
  satellites?: string[];
}
