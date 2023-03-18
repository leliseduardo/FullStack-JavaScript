import { Spaceship } from "./index";
import * as lodash from "lodash";

interface BattleSpaceship extends Spaceship {
  weapons: number;
}

let xwing: BattleSpaceship = {
  name: "T8",
  pilot: "Beeblebrox",
  speed: 50,
  weapons: 4,
};

lodash.camelCase("Hello World");
