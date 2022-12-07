import "core-js";
import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false,
};

async function adjustPosition(x, y, z) {
  if (z > 90) {
    return Promise.reject("Ângulo z inválido!");
  }
  laserGun.currentPosition = [x, y, z];
  return [x, y, z];
}

async function fire(x, y, z) {
  laserGun.firing = true;
  return [x, y, z];
}

async function moveAndFire(x, y, z) {
  try {
    const ajustedPosition = await adjustPosition(x, y, z);
    console.log(
      `Arma ajustada para as coordenadas (${ajustedPosition[0]}, ${ajustedPosition[1]}, ${ajustedPosition[2]})`
    );
    const fired = await fire(...ajustedPosition);
    console.log(
      `Começando a atirar nas coordenadas (${fired[0]}, ${fired[1]}, ${fired[2]})`
    );
  } catch (error) {
    console.log(error);
  }
}

moveAndFire(20, 40, 89);
